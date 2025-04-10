import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Teaser.module.css";

const Teaser = ({ blok }) => {
  return (
    <div className={styles.teaser} {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
    </div>
  );
};

export default Teaser;
