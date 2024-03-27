import { defineConfig, sharpImageService } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';
import sentry from '@sentry/astro';

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [db(), react(), tailwind({
    applyBaseStyles: false
  }), sentry({
    dsn: 'https://344c104dfc8efb083ef8ba9af7dd362d@o4506412599083008.ingest.us.sentry.io/4506957417086976',
    sourceMapsUploadOptions: {
      project: 'javascript-astro',
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  }), robotsTxt()],
  image: {
    service: sharpImageService()
  }
});