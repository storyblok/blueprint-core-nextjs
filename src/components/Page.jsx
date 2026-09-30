import { StoryblokBlock } from '@/lib/storyblok';

const Page = ({ block, editable }) => (
	<main {...editable}>
		{block.body?.map((nestedBlok) => (
			<StoryblokBlock block={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
