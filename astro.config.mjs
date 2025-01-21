// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				en: "Megaten Speedruns Resources",
				"jp" : "メガテンRTA全書",
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
				}
			},
			sidebar: [
				{
					label: "Shin Megami Tensei",
					autogenerate: {directory: "smt"}
				},
				{
					label: "Persona",
					autogenerate: {directory: "persona"}
				},
				{
					label: "Digital Devil Saga",
					autogenerate: {directory: "dds"}
				},
				{
					label: "Devil Summoner",
					autogenerate: {directory: "devilsummoner"}
				},
				{
					label: "Metaphor",
					autogenerate: {directory: "metaphor"}
				},
				{
					label: "Devil Children",
					autogenerate: {directory: "devilchildren"}
				},
				{
					label: "Devil Survivor",
					autogenerate: {directory: "devilsurvivor"}
				},
				{
					label: "Last Bible",
					autogenerate: {directory: "lastbible"}
				},
				{
					label: "Others",
					autogenerate: {directory: "others"}
				},
			],
		}),
	],
});
