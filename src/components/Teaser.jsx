import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }) => {
  return (
    <div className="teaser" {...storyblokEditable(blok)}>
      <h2>{blok.headline}</h2>
    </div>
  );
};

export default Teaser;
