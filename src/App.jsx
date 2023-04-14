import Loading from "./components/Loading";
import Navbar from "./components/SearchBox";
import CardList from "./components/CardList";

import { useEffect, useContext } from "react";
import CharacterContext from "./Context/character";
function App() {
  const { loading, error, data, characters, setCharacters } = useContext(
    CharacterContext
  );

  useEffect(() => {
    if (!loading && data) {
      setCharacters(data.characters.results);
    }
  }, [loading]);

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <Navbar />
      <CardList />
    </>
  );
}

export default App;
