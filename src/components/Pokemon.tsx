import React from "react";
import classes from "./Pokemon.module.css";

interface Props {
  name: string;
  url: string;
}

export const extractPokemonURL: (url: string) => number = (url) => {
  const segments = url.split('/')
  return Number(segments[segments.length - 2])
}

// https://pokeres.bastionbot.org/

const Pokemon: React.FC<Props> = ({ name, url}) => {
  const id = extractPokemonURL(url);

  return (
    <div className={classes.root}>
      <h2 className={classes.name}>{name}</h2> 
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={`${name} alt text`} />
      <p><a href={url}>More Info</a></p>
    </div>
  );
};

export default Pokemon;
