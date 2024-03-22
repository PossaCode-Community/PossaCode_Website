import { renderers } from './renderers.mjs';
import { manifest } from './manifest_xDgPlzdx.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C3LsvQa4.mjs');
const _page1 = () => import('./chunks/a-propos_bt-jjF18.mjs');
const _page2 = () => import('./chunks/index_Ctw-bDDg.mjs');
const _page3 = () => import('./chunks/_.._YbGCCoDl.mjs');
const _page4 = () => import('./chunks/conditions-generales_DaSBLCBu.mjs');
const _page5 = () => import('./chunks/contact_PakV72I4.mjs');
const _page6 = () => import('./chunks/index_DuO-RxD-.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/blogs/index.astro", _page2],
    ["src/pages/blogs/[...slug].astro", _page3],
    ["src/pages/conditions-generales.md", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "42f2ac00-192c-4fc2-b5b3-5ec08b695d4e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
