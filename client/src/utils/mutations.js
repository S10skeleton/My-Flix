import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $director: String!, $genre: [String]!, $releaseDate: String!, $duration: Int, $description: String) {
    addMovie(title: $title, director: $director, genre: $genre, releaseDate: $releaseDate, duration: $duration, description: $description) {
      id
      title
      // ... other fields
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateMovie($id: ID!, $title: String, $director: String, $genre: [String], $releaseDate: String, $duration: Int, $description: String) {
    updateMovie(id: $id, title: $title, director: $director, genre: $genre, releaseDate: $releaseDate, duration: $duration, description: $description) {
      id
      title
      // ... other fields
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

// Add similar mutations for User operations
export const ADD_USER = gql`
  // ...
`;

export const UPDATE_USER = gql`
  // ...
`;

export const DELETE_USER = gql`
  // ...
`;

// Include mutations for adding/removing favorites if needed
export const ADD_FAVORITE = gql`
  // ...
`;

export const REMOVE_FAVORITE = gql`
  // ...
`;
