import { StoryblokBlocks } from '@/lib/storyblok';

const Page = ({ block, editable }) => (
	<main {...editable}>
		{block.body && <StoryblokBlocks blocks={block.body} />}
	</main>
);

export default Page;
