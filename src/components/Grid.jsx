import { StoryblokBlock } from '@/lib/storyblok';

const Grid = ({ block, editable }) => (
	<div {...editable} className="grid">
		{block.columns.map((nestedBlok) => (
			<StoryblokBlock block={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default Grid;
