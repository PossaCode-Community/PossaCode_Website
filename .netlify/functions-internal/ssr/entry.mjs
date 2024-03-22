import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BJiX0ToN.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_D4nFOmyp.mjs');
const _page1 = () => import('./chunks/conditions-generales_5-VFNN2y.mjs');
const _page2 = () => import('./chunks/index_B1AQwuEj.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/conditions-generales.md", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "768f554a-afa7-4ed9-90cb-5580f07610f2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
