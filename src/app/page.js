import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import styles from "./page.module.css";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className={styles.page}>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`, sbParams);
}
