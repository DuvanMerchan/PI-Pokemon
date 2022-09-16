export const colorPoke = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#219EBC",
  shadow: "9D8189",
};
export const textColorPoke = {
    normal: "#434230",
    fighting: "#87201c",
    flying: "#7664aa",
    poison: "#722b70",
    ground: "#6e5d31",
    rock: "#7f7025",
    bug: "#748112",
    ghost: "#503c69",
    steel: "#737381",
    fire: "#be6726",
    water: "#3b5690",
    grass: "#49772d",
    electric: "#9d841c",
    psychic: "#ae3b5e",
    ice: "#78adab",
    dragon: "#4d25b0",
    dark: "#594538",
    fairy: "#ab6a8a",
    unknown: "#176e83",
    shadow: "7d676d",
}
export const typeColor = (obj, name) => {
    try {
      for (const propiedad in obj) {
        if (name=== propiedad) {
          return obj[propiedad]
        }
      }
    } catch (error) {
      console.log(error);
    }
  };