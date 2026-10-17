import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

test('plays public Suno songs through their embed instead of an unreadable audio URL', async () => {
  const result = await build({
    entryPoints: ['client/src/components/MusicPlayer.tsx'],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    jsx: 'automatic',
    external: ['react', 'react-dom'],
    write: false,
  });
  const module = { exports: {} };
  new Function('require', 'module', 'exports', result.outputFiles[0].text)(
    createRequire(import.meta.url), module, module.exports,
  );
  const html = renderToStaticMarkup(createElement(module.exports.default));

  assert.match(html, /<iframe[^>]+src="https:\/\/suno\.com\/embed\/5884c1bc-aa91-43d4-84c0-9108198dbde5"/);
  assert.match(html, /title="[^"]+"[^>]*allow="[^"]*autoplay/);
  assert.doesNotMatch(html, /<audio/);
  assert.match(html, /Late Night Slow Dances/);
});
