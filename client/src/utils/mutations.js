import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVEDBOOKS = gql`
  mutation saveBooks ($bookData: BookInput!) {
    saveBooks(bookData: $bookData) {
      _id
      username
      email
       savedBooks {
        authors
        description
        bookId
        image
        link
        title
        
      }
    }
  }
`;

export const REMOVEBOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
        
      }
    }
  }
`;
