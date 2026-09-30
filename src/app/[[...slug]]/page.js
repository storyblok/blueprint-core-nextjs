import { StoryblokPreview } from '@storyblok/react/rsc';
import { apiClient } from '@/lib/storyblok';
import { renderContent } from '@/lib/actions';
import { Suspense } from 'react';

export default async function Page({ params }) {
	const { slug } = await params;
	let fullSlug = slug ? slug.join('/') : 'home';

	const storyPromise = apiClient.stories.get(fullSlug, {
		query: { version: 'draft' },
	});

	return (
		<Suspense fallback={<main>Loading...</main>}>
			<PageContent storyPromise={storyPromise} />
		</Suspense>
	);
}
async function PageContent({ storyPromise }) {
	const { data } = await storyPromise;
	const story = data?.story;

	if (!story) {
		return <main>Story not found</main>;
	}

	return <StoryblokPreview story={story} renderContent={renderContent} />;
}
