;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c19e5611-7d0a-4ca9-b158-0fac75d2fa05",e._sentryDebugIdIdentifier="sentry-dbid-c19e5611-7d0a-4ca9-b158-0fac75d2fa05")}catch(e){}}();import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { isNotNull } from '@astrojs/db/dist/runtime/config.js';
import '../astro_BgBX_Wl-.mjs';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://possacode.netlify.app/", "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Member = asDrizzleTable("Member", { "columns": { "id": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Member", "primaryKey": true } }, "first_name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "first_name", "collection": "Member", "primaryKey": false, "optional": false } }, "last_name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "last_name", "collection": "Member", "primaryKey": false, "optional": false } }, "role": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "role", "collection": "Member", "primaryKey": false, "optional": true } }, "profession": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "profession", "collection": "Member", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "Member", "primaryKey": false, "optional": true } }, "linkedin_url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "linkedin_url", "collection": "Member", "primaryKey": false, "optional": false } }, "github_url": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "github_url", "collection": "Member", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Member", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false }, false);

async function GET() {
  try {
    const members = await db.select().from(Member).where(isNotNull(Member.role));
    if (!members) {
      return new Response(
        JSON.stringify({
          message: "Not members was found"
        }),
        {
          status: 404,
          statusText: "Not found"
        }
      );
    }
    return new Response(JSON.stringify(members), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Sorry something went wrong"
      }),
      {
        status: 404,
        statusText: "Not found"
      }
    );
  }
}

export { GET };
//# sourceMappingURL=get-members_Bh2M-QCt.mjs.map
