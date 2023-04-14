import { Container, InputAdornment, TextField } from "@mui/material";
import { useState ,useContext} from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from '/logo.png'
import { searchCharacter } from "../queries";
import CharacterContext from '../Context/character'
import {useLazyQuery } from "@apollo/client";
import Loading from './Loading'
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, setCharacters } = useContext(CharacterContext);

  const [name, setName] = useState('')

  const [runQuery, { data, loading, error }] = useLazyQuery(searchCharacter);

if (loading) return <Loading />;
if (error) return <p>Error : {error.message}</p>;
if (data) {
    setCharacters(data.characters.results)
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // query is executed here
    runQuery({
      variables: { characterName: searchTerm }, // note: name = property shorthand
      suspend: false
    })
  };


  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
        <img src={logo} loading="lazy" alt="logo" className="logo"/>

        <form onSubmit={handleSubmit} >
        <TextField
        id="search"
        type="search"
        label="search for character name"
        value={searchTerm}
        onChange={handleChange}

        sx={{ width: '100%' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <SearchIcon onClick={(event) => {
            event.preventDefault();
            // query is executed here
            runQuery({
              variables: { characterName: searchTerm }, // note: name = property shorthand
              suspend: false
            })
          }} />
            </InputAdornment>
          ),
        }}
      />



                </form>


    </Container>
  );
}