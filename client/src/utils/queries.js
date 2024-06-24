import { gql } from '@apollo/client';

export const QUERY_MOVIES = gql`
  query movies {
    movies {
      id
      title
      director
      genre
      releaseDate
      duration
      description
      posterUrl
    }
  }
`;

export const QUERY_MOVIE = gql`
  query movie($id: ID!) {
    movie(id: $id) {
      id
      title
      director
      genre
      releaseDate
      duration
      description
      posterUrl
      streamingLink 
      trailerLink
    }
  }
`;


export const QUERY_USERS = gql`
  query users {
    users {
      id
      username
      email
      favorites {
        id
        title
        # // ... other movie fields as needed 
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      username
      email
      favorites {
        id
        title
        # // ... other movie fields as needed 
      }
    }
  }
`;
// queries.js
export const QUERY_RANDOM_MOVIE = gql`
  query randomMovie {
    randomMovie {
      id
      title
      director
      genre
      releaseDate
      duration
      description
      streamingLink
      trailerLink
      posterUrl
    }
  }
`;
