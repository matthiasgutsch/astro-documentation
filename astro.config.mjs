// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DC Design System",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/primefaces/primeng",
        },
      ],
      sidebar: [
        {
          label: "Components",
          items: [
            { label: "Button", slug: "components/button" },
            { label: "Tag", slug: "components/tag" },
            { label: "Select", slug: "components/select" },
          ],
        },
      ],
    }),
  ],
});
