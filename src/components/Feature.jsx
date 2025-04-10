import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Feature.module.css";

const Feature = ({ blok }) => {
  return (
    <div className={styles.feature} {...storyblokEditable(blok)}>
      <span>{blok.name}</span>
    </div>
  );
};

export default Feature;
