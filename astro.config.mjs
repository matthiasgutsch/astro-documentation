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
          label: "Foundations",
          items: [
            { label: "Colors", slug: "tokens/colors" },
            { label: "Typography", slug: "tokens/typography" },
            { label: "Spacing", slug: "tokens/spacing" },
          ],
        },

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
