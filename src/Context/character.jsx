import { createContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { getCharacters } from "../queries";
const CharacterContext = createContext();
function Provider({ children }) {
  const [characters, setCharacters] = useState([]);

  const { loading, error, data, fetchMore } = useQuery(getCharacters, {
    variables: {
      page: 1,
    },
  });

  const valueToShare = {
    characters,
    setCharacters,
    loading,
    error,
    data,
    fetchMore,
  };
  return (
    <CharacterContext.Provider value={valueToShare}>
      {children}
    </CharacterContext.Provider>
  );
}

export { Provider };
export default CharacterContext;
