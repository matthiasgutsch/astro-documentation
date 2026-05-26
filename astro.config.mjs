// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DC Design System",
      components: {
        SocialIcons: "./src/components/CustomSocialIcons.astro",
      },
      customCss: ["./src/styles/custom.css"],

      sidebar: [
        {
          label: "v21 (current)",
          items: [
            { label: "Button", slug: "components/button" },
            { label: "Tag", slug: "components/tag" },
            { label: "Select", slug: "components/select" },
          ],
        },
        {
          label: "v20",
          collapsed: true,
          items: [
            { label: "Button", slug: "v20/components/button" },
            { label: "Tag", slug: "v20/components/tag" },
            { label: "Select", slug: "v20/components/select" },
          ],
        },
      ],
    }),
  ],
});
