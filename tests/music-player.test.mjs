import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';
import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

test('uses MMusic controls and standard media without embedding another player', async () => {
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

  assert.ok(/<audio[^>]+src="https:\/\/cdn1\.suno\.ai\/5884c1bc-aa91-43d4-84c0-9108198dbde5.mp4"/.test(html), 'The custom player needs the playable AAC source');
  assert.ok(!html.includes('<iframe'), 'Playback must use MMusic, not an embedded player');
  assert.ok(html.includes('aria-label="Play"'), 'Expose the custom play button');
  assert.ok(html.includes('aria-label="Seek"'), 'Expose custom seeking');
  assert.ok(html.includes('aria-label="Volume"'), 'Expose custom volume');
  assert.match(html, /Late Night Slow Dances/);
});
