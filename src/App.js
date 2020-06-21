import React from 'react';
import client from "./config/graphql";
import { ApolloProvider } from "@apollo/react-hooks";
import MainPage from "./pages/MainPage";


function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{
        padding : "3rem"
      }}>
        <MainPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
