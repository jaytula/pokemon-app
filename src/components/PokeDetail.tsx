import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PokeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [abilities, setAbilities] = useState<string[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAbilities(
          data.abilities.map(
            (item: { ability: { name: string } }) => item.ability.name
          )
        );
      });
  }, [id]);
  return (
    <div>
      <h1>Pokemon {id}</h1>
      <ul>
        {abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeDetail;
