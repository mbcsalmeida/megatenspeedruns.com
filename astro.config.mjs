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
                  collapsed: true,
                  translations: {
                    'ja-JP': '真・女神転生',
                  },
              },
              {
                  label: "Persona",
                  autogenerate: {directory: "persona"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'ペルソナ',
                  },
              },
              {
                  label: "Digital Devil Saga",
                  autogenerate: {directory: "dds"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'DIGITAL DEVIL SAGA アバタール・チューナー',
                  },
                  
              },
              {
                  label: "Devil Summoner",
                  autogenerate: {directory: "devilsummoner"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'デビルサマナー',
                  },
              },
              {
                  label: "Metaphor",
                  autogenerate: {directory: "metaphor"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'メタファー：リファンタジオ',
                  },
              },
              {
                  label: "Devil Children",
                  autogenerate: {directory: "devilchildren"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'デビルチルドレン',
                  },
              },
              {
                  label: "Devil Survivor",
                  autogenerate: {directory: "devilsurvivor"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'デビルサバイバー',
                  },
              },
              {
                  label: "Last Bible",
                  autogenerate: {directory: "lastbible"},
                  collapsed: true,
                  translations: {
                    'ja-JP': 'ラスト・バイブル',
                  },
              },
              {
                  label: "Others",
                  autogenerate: {directory: "others"},
                  collapsed: true,
                  translations: {
                    'ja-JP': '他のゲーム',
                  },
              },
          ],
      }),
	],

  adapter: netlify(),
});