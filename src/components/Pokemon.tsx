import React, { useEffect, useState } from "react";
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
  const [info, setInfo] = useState<any>();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, [url]);
  return (
    <div className={classes.root}>
      {name} : <a href={url}>More Info</a>
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={`${name} alt text`} />
    </div>
  );
};

export default Pokemon;
