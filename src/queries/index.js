import {gql } from '@apollo/client';
const getCharacters= gql`
query characters($page: Int!){
  characters(page:$page){
    results{
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        dimension
      }
      location {
        id
        name

      }
      image

      created
    }
  }
  }


`
const searchCharacter = gql`
  query  SearchCharacter($characterName: String){
    characters(filter:{name: $characterName}){
      results{
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          dimension
        }
        location {
          id
          name

        }
        image

        created
      }
    }
    }

    `
export {getCharacters, searchCharacter}