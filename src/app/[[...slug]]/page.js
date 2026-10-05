import { notFound } from 'next/navigation';
import { StoryblokPreview } from '@storyblok/react/rsc';
import { renderContent } from '@/lib/actions';
import { apiClient } from '@/lib/storyblok';

export default async function Page({ params }) {
	const { slug } = await params;

	let fullSlug = slug ? slug.join('/') : 'home';

	const { data } = await apiClient.stories.get(fullSlug, {
		query: { version: 'draft' },
	});

	if (!data?.story) {
		notFound();
	}

	return <StoryblokPreview story={data.story} renderContent={renderContent} />;
}
