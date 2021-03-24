import React from "react";
import {
  findByAltText,
  getByAltText,
  getByRole,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import { extractPokemonURL } from "./components/Pokemon";
import Pokemon from "./components/Pokemon";

describe("Pokemon.tsx", () => {
  test("extracts the url from the params", () => {
    expect(extractPokemonURL("https://pokeapi.co/api/v2/pokemon/1/")).toBe(1);
    expect(extractPokemonURL("https://pokeapi.co/api/v2/pokemon/2/")).toBe(2);
    expect(extractPokemonURL("https://pokeapi.co/api/v2/pokemon/bad/")).toBe(
      NaN
    );
  });

  test("renders an image of the right pokemon", async () => {
    const wrapper = render(
      <Pokemon name="bulbasaur" url={"https://pokeapi.co/api/v2/pokemon/1/"} />
    );
    const imageElem = wrapper.getByAltText("bulbasaur alt text") as HTMLImageElement;
    expect(imageElem.src).toBe('https://pokeres.bastionbot.org/images/pokemon/1.png')

    // const imageElem2 = await wrapper.findByAltText('bulbasaur alt text') as HTMLImageElement
    // expect(imageElem2.src).toBe('https://pokeres.bastionbot.org/images/pokemon/1.png')
  });
});

describe("App.tsx", () => {
  test('h1 is centered', () => {
    const wrapper = render(<App />);
    const titleElem = wrapper.getByText('PokeList App');

    expect(titleElem).toHaveStyle({textAlign: 'center'})
  })
})