import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import styles from './Grid.module.css'

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)} className={styles.grid}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
)

export default Grid
