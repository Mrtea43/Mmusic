import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

async function renderSite(hash = '') {
  const result = await build({
    entryPoints: ['client/src/pages/Home.tsx'],
    bundle: true, platform: 'node', format: 'cjs', jsx: 'automatic',
    external: ['react', 'react-dom'], write: false,
  });
  const module = { exports: {} };
  new Function('require', 'module', 'exports', result.outputFiles[0].text)(
    createRequire(import.meta.url), module, module.exports,
  );
  const previousWindow = globalThis.window;
  globalThis.window = { location: { hash } };
  try {
    return renderToStaticMarkup(createElement(module.exports.default));
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
}

test('navigation exposes the three real destinations and removes fake store links', async () => {
  const html = await renderSite();
  const header = html.match(/<header[\s\S]*?<\/header>/)[0];
  assert.ok(header.includes('href="#journal"'), 'Journal must be reachable from the header');
  assert.ok(header.includes('href="#/contact"'), 'Contact must open a page');
  assert.ok(!html.includes('App Store') && !html.includes('Google Play'));
  assert.ok(!html.includes('href="#"'), 'Do not ship dead navigation links');
  assert.ok(html.includes('under development'));
});

test('the hero offers accessible grayscale cover browsing', async () => {
  const html = await renderSite();
  assert.ok(html.includes('aria-roledescription="carousel"'));
  assert.ok(!html.includes('aria-label="Next cover"'));
  assert.ok(!html.includes('aria-label="Previous cover"'));
  assert.ok(!html.includes('tracks. One place to listen.'));
  const covers = html.match(/class="cover-image(?: is-active)?"/g) || [];
  assert.equal(covers.length, 18, 'Keep covers mounted so opacity can transition between them');
  assert.equal(covers.filter((cover) => cover.includes('is-active')).length, 1);
  assert.ok(!/aria-label="(?:Pause|Play) slideshow"/.test(html), 'The slideshow starts without a play/pause button');
  assert.ok(html.includes('src="./music-mark.svg"'), 'Use a crisp music-note mark on the cover');
  assert.ok(html.includes('Miles and Empty Space cover artwork'));
});

test('information pages disclose that example contact details and legal text are unfinished', async () => {
  const contact = await renderSite('#/contact');
  assert.ok(contact.includes('hello@mmusic.example'));
  assert.ok(contact.includes('Placeholder contact details'));
  const privacy = await renderSite('#/privacy');
  assert.ok(privacy.includes('Draft privacy notice'));
  assert.ok(privacy.includes('localStorage') && privacy.includes('GitHub Pages'));
  const terms = await renderSite('#/terms');
  assert.ok(terms.includes('Draft terms of use'));
});

test('journal articles have direct URLs and missing articles have a useful fallback', async () => {
  const article = await renderSite('#/journal/miles-and-empty-space');
  assert.ok(article.includes('Back to journal'));
  assert.ok(article.includes('shoegaze'));
  const missing = await renderSite('#/journal/does-not-exist');
  assert.ok(missing.includes('Page not found'));
});
