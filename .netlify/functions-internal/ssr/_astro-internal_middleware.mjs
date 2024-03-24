;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9e369136-1981-4e65-8fba-421a8fb90637",e._sentryDebugIdIdentifier="sentry-dbid-9e369136-1981-4e65-8fba-421a8fb90637")}catch(e){}}();import './chunks/astro_BgBX_Wl-.mjs';
import { onRequest as onRequest$1 } from '@sentry/astro/middleware';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
//# sourceMappingURL=_astro-internal_middleware.mjs.map
