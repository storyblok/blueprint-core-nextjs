'use server';

import { StoryblokBlock } from '@/lib/storyblok';

export async function renderContent(story) {
	return <StoryblokBlock block={story.content} />;
}
