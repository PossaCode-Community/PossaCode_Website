;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="392a190f-9c6b-4989-96cc-f386df5f10e2",e._sentryDebugIdIdentifier="sentry-dbid-392a190f-9c6b-4989-96cc-f386df5f10e2")}catch(e){}}();import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BoPjX0SG.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./chunks/generic_B_Sy-HWI.mjs');
const _page1 = () => import('./chunks/a-propos_1vKy87XC.mjs');
const _page2 = () => import('./chunks/get-members_BLilLQ_7.mjs');
const _page3 = () => import('./chunks/index_CqW-Dimj.mjs');
const _page4 = () => import('./chunks/_.._CXMW7a2H.mjs');
const _page5 = () => import('./chunks/conditions-generales_B9c-0UuU.mjs');
const _page6 = () => import('./chunks/contact_D_BRZLy-.mjs');
const _page7 = () => import('./chunks/index_BSe7xdQp.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/api/get-members.json.ts", _page2],
    ["src/pages/blogs/index.astro", _page3],
    ["src/pages/blogs/[...slug].astro", _page4],
    ["src/pages/conditions-generales.md", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0cfb3010-5e90-4318-961e-63d3c0b87064"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
//# sourceMappingURL=entry.mjs.map
