// @ts-check
import { defineConfig } from "astro/config";

// Integrations
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// Vite plugins
import Icons from "unplugin-icons/vite";
import checker from "vite-plugin-checker";

// Remark/Rehype
// @ts-ignore
import rehypeFigure from "@microflash/rehype-figure";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import emoji from "remark-emoji";
import remarkToc from "remark-toc";
import { remarkAlert } from "remark-github-blockquote-alert";

import criticalCss from "astro-critical-css";

export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: "https://lel.nekoweb.org",
  output: "static",
  server: { host: true },

  integrations: [mdx(), sitemap(), partytown(), criticalCss()],

  markdown: {
    rehypePlugins: [rehypeFigure, rehypeAutolinkHeadings],
    remarkPlugins: [emoji, remarkToc, [remarkAlert, { legacyTitle: true }]],
    gfm: true,
  },
  vite: {
    build: {
      target: "esnext",
      minify: "esbuild",
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    },

    optimizeDeps: {
      include: [],
    },
    esbuild: {
      treeShaking: true,
      // drop: ["console", "debugger"],
    },
    plugins: [
      Icons({ compiler: "astro" }),
      checker({
        typescript: true,
        biome: {
          command: "check",
        },
        stylelint: {
          lintCommand: "stylelint ./src/**/*.{css,astro}",
        },
      }),
    ],
  },

  experimental: {
    contentIntellisense: true,
    clientPrerender: true,
    // svg: true,
  },
});