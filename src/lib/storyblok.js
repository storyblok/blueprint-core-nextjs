import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
  },
  apiOptions: {
    endpoint: process.env.STORYBLOK_API_BASE_URL ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2` : undefined,
  },
});
