;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b407aef6-303f-4fc1-bc87-243204452bce",e._sentryDebugIdIdentifier="sentry-dbid-b407aef6-303f-4fc1-bc87-243204452bce")}catch(e){}}();import { M as MetaData, b as $$BaseLayout } from './__CZ-lUUda.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_BgBX_Wl-.mjs';

const $$Astro = createAstro("https://possacode.netlify.app/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Contact - ${MetaData.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-40"> <h2 class="text-healding-2 font-semibold uppercase">Contact</h2> </div> ` })}`;
}, "C:/Users/blond/Documents/possacode-site/src/pages/contact.astro", void 0);

const $$file = "C:/Users/blond/Documents/possacode-site/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
//# sourceMappingURL=contact_13zbo24-.mjs.map
