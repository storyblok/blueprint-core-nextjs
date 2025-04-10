import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.name}</h2>;
};

export default Feature;
