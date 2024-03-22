import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BlSCdWg3.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BhfGDAAx.mjs');
const _page1 = () => import('./chunks/a-propos_Bzr1WJoE.mjs');
const _page2 = () => import('./chunks/index_B8Zi7XD6.mjs');
const _page3 = () => import('./chunks/_.._UrcmZKnz.mjs');
const _page4 = () => import('./chunks/conditions-generales_Dmp6Ah8r.mjs');
const _page5 = () => import('./chunks/contact_Bkt3b_Xg.mjs');
const _page6 = () => import('./chunks/index_BKB3pLti.mjs');
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
    "middlewareSecret": "32c6330f-0d2c-4346-a672-e8a53065e570"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
