import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $director: String!, $genre: [String]!, $releaseDate: String!, $duration: Int, $description: String, $streamingLink: String, $trailerLink: String) {
    addMovie(title: $title, director: $director, genre: $genre, releaseDate: $releaseDate, duration: $duration, description: $description, streamingLink: $streamingLink,  trailerLink: $trailerLink) {
      id
      title
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateMovie($id: ID!, $title: String, $director: String, $genre: [String], $releaseDate: String, $duration: Int, $description: String) {
    updateMovie(id: $id, title: $title, director: $director, genre: $genre, releaseDate: $releaseDate, duration: $duration, description: $description) {
      id
      title
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
// Mutation for user signup (adjusted to match your backend schema)
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($username: String!, $email: String!){
  updateUser(username: $username, email: $email) {
    id
    username
    email
  }
}

`;
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;


// Include mutations for adding/removing favorites if needed
export const ADD_FAVORITE = gql`
  mutation addFavorite($userId: ID!, $movieId: ID!) {
    addFavorite(userId: $userId, movieId: $movieId) {
      id
      favorites {
        id
        title
        # ... other movie fields you might want to include
      }
    }
  }
`;


export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($userId: ID!, $movieId: ID!) {
    removeFavorite(userId: $userId, movieId: $movieId) {
      id
      favorites {
        id
        title
        # ... other movie fields you might want to include
      }
    }
  }
`;
