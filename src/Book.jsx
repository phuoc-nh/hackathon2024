import React from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL query to fetch a list of books
const GET_CONTACTS_LIST = gql`
  query test {
    contactsList {
      records {
        company
      }
    }
  }

`;
const GET_TOKEN = gql`
  query getToken($accessKey: String!, $secretKey: String!) {
    apiAuthToken(accessKey: $accessKey, secretKey: $secretKey) {
      expiresAt
      refreshToken
      token
    }
  }
`;

function Books() {
  const {data, loading, error} = useQuery(GET_CONTACTS_LIST);
  const {data: token, error: err} = useQuery(GET_TOKEN, {
    variables: {
      "accessKey": "W3OwNN5dq8FO4ZmuMfXBEOwKXhIAi6Uk",
      "secretKey": "g1yk3nZ#Qe&%oAtr6djfbj7zNO%o2k%x!oKfqBRwncMJ^PcWpSTCWLaMSMM&&CjH"
    },
  });

  if (loading) 
    return <div>Loading...</div>;
  if (error) 
    return <div>Error</div>;
  console.log({token})
  console.log({err})
  return (
    <div>
      {JSON.stringify(token)}
      {JSON.stringify(data)}
    </div>
  )
}


export default Books;