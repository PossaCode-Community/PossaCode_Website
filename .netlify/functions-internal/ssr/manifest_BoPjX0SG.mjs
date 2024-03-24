;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a7601d81-631a-4773-b13d-8c0902d5bd21",e._sentryDebugIdIdentifier="sentry-dbid-a7601d81-631a-4773-b13d-8c0902d5bd21")}catch(e){}}();import './chunks/astro_BgBX_Wl-.mjs';
import 'clsx';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CJozPK6x.css"}],"routeData":{"route":"/a-propos","isIndex":false,"type":"page","pattern":"^\\/a-propos\\/?$","segments":[[{"content":"a-propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a-propos.astro","pathname":"/a-propos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[],"routeData":{"route":"/api/get-members.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-members\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-members.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-members.json.ts","pathname":"/api/get-members.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CJozPK6x.css"}],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CJozPK6x.css"}],"routeData":{"route":"/blogs/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blogs(?:\\/(.*?))?\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blogs/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CJozPK6x.css"}],"routeData":{"route":"/conditions-generales","isIndex":false,"type":"page","pattern":"^\\/conditions-generales\\/?$","segments":[[{"content":"conditions-generales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/conditions-generales.md","pathname":"/conditions-generales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CJozPK6x.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C1Irm4oJ.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CJozPK6x.css"},{"type":"inline","content":"section[data-astro-cid-j7pv25f6]:is(#hero){background-image:linear-gradient(#000000b3,#000000b3),url(/_astro/hero-bg.JICovHD4.png);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}section[data-astro-cid-j7pv25f6]:is(#notre-actualité) .actuality[data-astro-cid-j7pv25f6]{background-image:url(/_astro/actuality.C5m_HSvZ.png);border-radius:30px;background-position:67%;background-repeat:no-repeat;padding:.75rem}section[data-astro-cid-j7pv25f6] #partenairs[data-astro-cid-j7pv25f6]{background-image:url(/_astro/background-vector.DtMkoDb-.png);background-size:cover;background-position:center;background-repeat:no-repeat}section[data-astro-cid-j7pv25f6] ul[data-astro-cid-j7pv25f6]::-webkit-scrollbar{height:0px;max-width:200px;cursor:pointer;overflow:hidden;border-radius:9999px}@media (min-width: 768px){section[data-astro-cid-j7pv25f6] ul[data-astro-cid-j7pv25f6]::-webkit-scrollbar{height:.5rem}}section[data-astro-cid-j7pv25f6] ul[data-astro-cid-j7pv25f6]::-webkit-scrollbar-thumb{border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://possacode.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/blond/Documents/possacode-site/src/pages/blogs/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/blond/Documents/possacode-site/src/pages/conditions-generales.md",{"propagation":"none","containsHead":true}],["C:/Users/blond/Documents/possacode-site/src/pages/a-propos.astro",{"propagation":"none","containsHead":true}],["C:/Users/blond/Documents/possacode-site/src/pages/blogs/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/blond/Documents/possacode-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/blond/Documents/possacode-site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blogs/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blogs/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/a-propos.astro":"chunks/pages/a-propos_BpSL5Chk.mjs","/src/pages/conditions-generales.md":"chunks/pages/conditions-generales_Cg9mW3IW.mjs","/src/pages/contact.astro":"chunks/pages/contact_13zbo24-.mjs","/node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CnLV8LMo.mjs","/src/pages/api/get-members.json.ts":"chunks/pages/get-members_Bh2M-QCt.mjs","\u0000@astrojs-manifest":"manifest_BoPjX0SG.mjs","C:/Users/blond/Documents/possacode-site/node_modules/.pnpm/@astrojs+react@3.1.0_@types+react-dom@18.2.22_@types+react@18.2.66_react-dom@18.2.0_react@18.2.0_vite@5.2.6/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_ez2-OHKB.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_B_Sy-HWI.mjs","\u0000@astro-page:src/pages/a-propos@_@astro":"chunks/a-propos_1vKy87XC.mjs","\u0000@astro-page:src/pages/api/get-members.json@_@ts":"chunks/get-members_BLilLQ_7.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"chunks/index_CqW-Dimj.mjs","\u0000@astro-page:src/pages/blogs/[...slug]@_@astro":"chunks/_.._CXMW7a2H.mjs","\u0000@astro-page:src/pages/conditions-generales@_@md":"chunks/conditions-generales_B9c-0UuU.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_D_BRZLy-.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BSe7xdQp.mjs","C:/Users/blond/Documents/possacode-site/src/content/blog/possacode-devday-2024.md?astroContentCollectionEntry=true":"chunks/possacode-devday-2024_CetSHBCl.mjs","C:/Users/blond/Documents/possacode-site/src/content/blog/pourquoi-integrer-possacode.md?astroContentCollectionEntry=true":"chunks/pourquoi-integrer-possacode_BMja5AON.mjs","C:/Users/blond/Documents/possacode-site/src/content/blog/possacode-devday-2024.md?astroPropagatedAssets":"chunks/possacode-devday-2024_DNvDW_FT.mjs","C:/Users/blond/Documents/possacode-site/src/content/blog/pourquoi-integrer-possacode.md?astroPropagatedAssets":"chunks/pourquoi-integrer-possacode_CaL-zDcc.mjs","C:/Users/blond/Documents/possacode-site/src/content/blog/possacode-devday-2024.md":"chunks/possacode-devday-2024_CYqtQ034.mjs","C:/Users/blond/Documents/possacode-site/src/content/blog/pourquoi-integrer-possacode.md":"chunks/pourquoi-integrer-possacode_Bzec___K.mjs","@astrojs/react/client.js":"_astro/client.C3R0tE6b.js","@/components/MobileNavigation":"_astro/MobileNavigation.lk99PPVD.js","astro:scripts/page.js":"_astro/page.C1Irm4oJ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/background-vector.DtMkoDb-.png","/_astro/actuality.C5m_HSvZ.png","/_astro/code.DQ6tOQWo.png","/_astro/possacode-africa.CU3rorGc.png","/_astro/techno-group-1.CI5lbDgT.png","/_astro/techno-group-2.KndP1G3Z.png","/_astro/possacode-members.CK4DQPku.png","/_astro/hero-bg.JICovHD4.png","/_astro/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2","/_astro/inter-cyrillic-wght-normal.BmJJXa8e.woff2","/_astro/inter-greek-ext-wght-normal.D5AYLNiq.woff2","/_astro/inter-greek-wght-normal.DyIDNIyN.woff2","/_astro/inter-latin-ext-wght-normal.CN1pIXkb.woff2","/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2","/_astro/inter-vietnamese-wght-normal._GQuwPVU.woff2","/_astro/hands.CwSpfbD0.png","/_astro/region.DK3vVOqi.png","/_astro/people.JqCE2h4y.png","/_astro/human.BaC7J5Sd.png","/_astro/face-emoji.CAbKxP0G.png","/_astro/hand.DDzS8_ic.png","/_astro/groupe.CvjktOVI.png","/_astro/cgdt.CD1kMidt.png","/_astro/devcast.CTOpbhbZ.png","/_astro/sfa.BkEe-dDW.png","/_astro/galsen-dev.D5Yyiz4W.png","/_astro/community.ux6JHIK5.png","/_astro/possacode-logo-white.BdI_u7uq.png","/_astro/possacode-logo-blue.y0uJTggq.png","/_astro/linkedin.DK_W0tr4.svg","/_astro/x.D2rpeVJ4.svg","/_astro/facebook.DKxICQY8.svg","/_astro/instagram.sjokM6Gt.svg","/_astro/possacode-devday-2023.B2oai5b3.png","/_astro/close-menu.IVThe1Te.png","/_astro/_slug_.CJozPK6x.css","/chunks/astro_BgBX_Wl-.mjs.map","/chunks/astro/assets-service_DLoS12gj.mjs.map","/chunks/pages/__CZ-lUUda.mjs.map","/chunks/pages/a-propos_BpSL5Chk.mjs.map","/chunks/pages/conditions-generales_Cg9mW3IW.mjs.map","/chunks/pages/contact_13zbo24-.mjs.map","/chunks/pages/generic_CnLV8LMo.mjs.map","/chunks/pages/get-members_Bh2M-QCt.mjs.map","/chunks/pages/index_BSuuOfYM.mjs.map","/manifest_BoPjX0SG.mjs.map","/chunks/vnode-children_ez2-OHKB.mjs.map","/chunks/generic_B_Sy-HWI.mjs.map","/chunks/a-propos_1vKy87XC.mjs.map","/chunks/get-members_BLilLQ_7.mjs.map","/chunks/index_CqW-Dimj.mjs.map","/chunks/_.._CXMW7a2H.mjs.map","/chunks/conditions-generales_B9c-0UuU.mjs.map","/chunks/contact_D_BRZLy-.mjs.map","/chunks/index_BSe7xdQp.mjs.map","/chunks/possacode-devday-2024_CetSHBCl.mjs.map","/chunks/pourquoi-integrer-possacode_BMja5AON.mjs.map","/chunks/possacode-devday-2024_DNvDW_FT.mjs.map","/chunks/pourquoi-integrer-possacode_CaL-zDcc.mjs.map","/chunks/possacode-devday-2024_CYqtQ034.mjs.map","/chunks/pourquoi-integrer-possacode_Bzec___K.mjs.map","/entry.mjs.map","/renderers.mjs.map","/_astro-internal_middleware.mjs.map","/middleware.mjs.map","/favicon.svg","/_astro/client.C3R0tE6b.js","/_astro/client.C3R0tE6b.js.map","/_astro/index.BM4lfT8x.js","/_astro/index.BM4lfT8x.js.map","/_astro/MobileNavigation.lk99PPVD.js","/_astro/MobileNavigation.lk99PPVD.js.map","/_astro/page.C1Irm4oJ.js","/_astro/page.C1Irm4oJ.js.map","/_astro/_sentry-release-injection-file.Disw-5EX.js","/_astro/_sentry-release-injection-file.Disw-5EX.js.map","/_astro/page.C1Irm4oJ.js"],"buildFormat":"directory"});

export { manifest };
//# sourceMappingURL=manifest_BoPjX0SG.mjs.map
