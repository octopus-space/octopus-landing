import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" }],
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
  title: "Octopus - Greater Bitcoin Assets Router Protocol",
});
