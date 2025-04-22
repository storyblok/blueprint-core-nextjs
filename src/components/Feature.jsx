import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }) => {
  return (
    <div className="feature" {...storyblokEditable(blok)}>
      <strong>{blok.name}</strong>
    </div>
  );
};

export default Feature;
