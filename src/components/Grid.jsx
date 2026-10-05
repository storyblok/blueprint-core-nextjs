import { StoryblokBlocks } from '@/lib/storyblok';

const Grid = ({ block, editable }) => (
	<div {...editable} className="grid">
		{block.columns && <StoryblokBlocks blocks={block.columns} />}
	</div>
);

export default Grid;
