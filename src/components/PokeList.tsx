import React, { useEffect, useState } from "react";
import PaginationControls from "./paginationControls";
import Pokemon from "./Pokemon";

// https://pokeapi.co/docs/v2

const LIMIT = 50
const POKEAPI_ENDPOINT = `https://pokeapi.co/api/v2/pokemon`;

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState<
    { name: string; url: string }[]
  >([]);
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    // URLSearchParams
    console.log({ page });
    const searchParams = new URLSearchParams();
    searchParams.set("limit", LIMIT.toString());
    searchParams.set("offset", (LIMIT * page).toString());
    const params = searchParams.toString();
    console.log('params' + params)

    fetch(`${POKEAPI_ENDPOINT}?${params}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setNumPages(Math.floor(data.count / 50));
      });
  }, [page]);

  const onNextHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setPage((page) => page + 1);
  };

  const onPrevHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setPage((page) => page - 1);
  };

  return (
    <div>
      <h1>PokeList</h1>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          );
        })}
      </ul>
      <PaginationControls
        onNextHandler={onNextHandler}
        onPrevHandler={onPrevHandler}
      />
      <p>
        Page: {page + 1} of {numPages}
      </p>
    </div>
  );
};

export default PokeList;
