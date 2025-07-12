// @ts-check
import { defineConfig } from "astro/config";

// Integrations
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import pageInsight from "astro-page-insight";
import metaTags from "astro-meta-tags";

// Vite plugins
import Icons from "unplugin-icons/vite";

// Remark/Rehype
// @ts-expect-error no declaration file
import rehypeFigure from "@microflash/rehype-figure";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import emoji from "remark-emoji";
import remarkToc from "remark-toc";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  site: "https://lel.nekoweb.org",
  output: "static",
  trailingSlash: "always",

  server: { host: true },

  build: {
    format: "preserve",
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [mdx(), sitemap(), partytown(), pageInsight(), metaTags()],

  markdown: {
    rehypePlugins: [rehypeFigure, rehypeAutolinkHeadings],
    remarkPlugins: [emoji, remarkToc, [remarkAlert, { legacyTitle: true }]],
    gfm: true,
  },

  vite: {
    css: {
      transformer: "lightningcss",
    },
    build: {
      target: "esnext",
      minify: "esbuild",
      cssCodeSplit: true,
      assetsInlineLimit: 0,
      sourcemap: true,
      cssMinify: "lightningcss",
    },
    esbuild: {},
    plugins: [Icons({ compiler: "astro" })],
    server: {
      host: true,
    },
  },

  experimental: {
    contentIntellisense: true,
    clientPrerender: true,
    // svg: true,
  },
});
