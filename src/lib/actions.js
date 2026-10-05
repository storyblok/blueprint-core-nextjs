'use server';

import { StoryblokBlock } from '@/lib/storyblok';

export async function renderContent(story) {
	return story.content ? <StoryblokBlock block={story.content} /> : null;
}
