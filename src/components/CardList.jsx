import { useState, useContext } from "react";
import { Box, Grid } from "@mui/material";
import Card from "./Card";
import CharacterContext from "../Context/character";

export default function CardList() {
  const { characters, setCharacters, fetchMore,showMore } = useContext(CharacterContext);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Grid
      container
      paddingLeft={20}
      paddingRight={20}
      paddingTop={5}
      direction="column"
      justify="center"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {characters.map(



            ({ id, name, status, species, gender, image, origin }) => (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}

                species={species}
                gender={gender}
                image={image}
                origin={origin}

              />
            )
          )}
          {
            showMore?
          <button
            type="button"
            className="loadMore"
            onClick={() => {
              setPageNumber((prevNumber) => prevNumber + 1);
              fetchMore({
                variables: {
                  page: pageNumber + 1,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  setCharacters((prevState) => {
                    return [
                      ...prevState,
                      ...fetchMoreResult.characters.results,
                    ];
                  });
                },
              });
            }}
          >
            Get More Characters
          </button>:
          <></>
          }
        </Grid>
      </Box>
    </Grid>
  );
}
