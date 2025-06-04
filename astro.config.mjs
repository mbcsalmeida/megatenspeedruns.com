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
          social: [
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/pwe7yncyHF' },
            { icon: 'twitch', label: 'Twitch', href: 'https://www.twitch.tv/team/smtspeedrunningF' },
          ],
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
                  items: [
                    {
                      label: "Persona 1",
                      collapsed: true,
                      autogenerate: {directory: "persona/Persona 1"},
                      translations: {
                        'ja-JP': 'ペルソナ１',
                      },
                    },
                    {
                      label: "Persona 2",
                      collapsed: true,
                      autogenerate: {directory: "persona/Persona 2"},
                      translations: {
                        'ja-JP': 'ペルソナ２',
                      },
                    },
                    {
                      label: "Persona 3",
                      collapsed: true,
                      autogenerate: {directory: "persona/Persona 3"},
                      translations: {
                        'ja-JP': 'ペルソナ３',
                      },
                    },
                    {
                      label: "Persona 4",
                      collapsed: true,
                      autogenerate: {directory: "persona/Persona 4"},
                      translations: {
                        'ja-JP': 'ペルソナ４',
                      },
                    },
                    {
                      label: "Persona 5",
                      collapsed: true,
                      autogenerate: {directory: "persona/Persona 5"},
                      translations: {
                        'ja-JP': 'ペルソナ５',
                      },
                    },
                    {
                      label: "Persona Q",
                      slug: "persona/pq",
                      translations: {
                        'ja-JP': 'ペルソナQ'
                      }
                    },
                  ],
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
                label: "Majin Tensei",
                autogenerate: {directory: "majin"},
                collapsed: true,
                translations: {
                  'ja-JP': '魔神転生',
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