import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" },{ path: "/wrapping", component: "wrapping/index" }],
  metas: [
    { name: "keywords", content: "Octopus" },
    {
      name: "description",
      content: "Octopus Greater Bitcoin Assets Router Protocol",
    },
    { name: "theme-color", content: "#0A0053" },
  ],
  favicons: ["/favicon.png"],
  npmClient: "pnpm",
  plugins: ["@umijs/plugins/dist/model", "@umijs/plugins/dist/request"],
  model: {},
  request: {},
  title: "Octopus - Greater Bitcoin Assets Router Protocol",
  hash: true,
  history:{ type: 'hash' },
  jsMinifier: 'none',
});
