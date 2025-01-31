// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: {
              en: "Megaten Speedruns Resources",
              "jp" : "メガテンRTA全書",
          },
          editLink: {
              baseUrl: "https://github.com/mbcsalmeida/megatenspeedruns.com/edit/dev"
          },
          logo: {
              src: "./src/assets/logo.png",
              replacesTitle: true
          },
          favicon: "favicon.png",
          customCss: [
              "./src/globals.css",
              "@fontsource/dm-serif-display/400.css"
          ],
          components: {
            SocialIcons: './src/components/SocialLinks.astro',
          },
          social: {
              discord: "https://discord.gg/pwe7yncyHF",
              twitch: "https://www.twitch.tv/team/smtspeedrunning",
          },
          defaultLocale: "root",
          locales: {
              root: {
                  label: 'English',
                  lang: 'en', 
                },
              "jp": {
                  label: "日本語",
                  lang: "ja-JP"
              },
              "es": {
                  label: "Español",
                  lang: "es-ES"
              }
          },
          sidebar: [
              {
                  label: "Shin Megami Tensei",
                  autogenerate: {directory: "smt"},
                  collapsed: true
              },
              {
                  label: "Persona",
                  autogenerate: {directory: "persona"},
                  collapsed: true
              },
              {
                  label: "Digital Devil Saga",
                  autogenerate: {directory: "dds"},
                  collapsed: true
              },
              {
                  label: "Devil Summoner",
                  autogenerate: {directory: "devilsummoner"},
                  collapsed: true
              },
              {
                  label: "Metaphor",
                  autogenerate: {directory: "metaphor"},
                  collapsed: true
              },
              {
                  label: "Devil Children",
                  autogenerate: {directory: "devilchildren"},
                  collapsed: true
              },
              {
                  label: "Devil Survivor",
                  autogenerate: {directory: "devilsurvivor"},
                  collapsed: true
              },
              {
                  label: "Last Bible",
                  autogenerate: {directory: "lastbible"},
                  collapsed: true
              },
              {
                  label: "Others",
                  autogenerate: {directory: "others"},
                  collapsed: true
              },
          ],
      }),
	],

  adapter: netlify(),
});