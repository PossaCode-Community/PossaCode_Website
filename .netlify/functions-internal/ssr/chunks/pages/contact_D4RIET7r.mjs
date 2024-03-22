import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_DUL18hxm.mjs';
import { $ as $$BaseLayout } from './__B3_Vygd6.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "PossaCode - Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-40"> <h2 class="text-healding-2 font-semibold uppercase">Contact</h2> </div> ` })}`;
}, "C:/Users/blond/Documents/possacode-site/src/pages/contact.astro", void 0);

const $$file = "C:/Users/blond/Documents/possacode-site/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
