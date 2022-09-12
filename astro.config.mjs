import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://techsol-analytics.netlify.app/',
  integrations: [mdx(), sitemap(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  output: "server",
  adapter: netlify()
});
