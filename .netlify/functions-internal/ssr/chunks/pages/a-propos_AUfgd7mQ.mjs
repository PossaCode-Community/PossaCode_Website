import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_DUL18hxm.mjs';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';
import { $ as $$BaseLayout } from './__Dd44erai.mjs';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Member = asDrizzleTable("Member", { "columns": { "id": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Member", "primaryKey": true } }, "first_name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "first_name", "collection": "Member", "primaryKey": false, "optional": false } }, "last_name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "last_name", "collection": "Member", "primaryKey": false, "optional": false } }, "role": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "role", "collection": "Member", "primaryKey": false, "optional": true } }, "profession": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "profession", "collection": "Member", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "Member", "primaryKey": false, "optional": true } }, "linkedin_url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "linkedin_url", "collection": "Member", "primaryKey": false, "optional": false } }, "github_url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "github_url", "collection": "Member", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Member", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false }, false);

const $$Astro = createAstro();
const $$APropos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$APropos;
  const members = await db.select().from(Member);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "PossaCode - A propos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-40"> <h2 class="text-healding-2 font-semibold uppercase">Qui sommes-nous ?</h2> <div> ${members.map((member) => renderTemplate`<h1>${member.first_name}</h1>`)} </div> </div> ` })}`;
}, "C:/Users/blond/Documents/possacode-site/src/pages/a-propos.astro", void 0);

const $$file = "C:/Users/blond/Documents/possacode-site/src/pages/a-propos.astro";
const $$url = "/a-propos";

export { $$APropos as default, $$file as file, $$url as url };
