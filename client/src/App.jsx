import './Styles/Intro.css';
import './Styles/Home.css';
import './Styles/Styles.css'
import './Styles/Details.css';


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom"; // Import Outlet

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <Header />
        <Outlet /> {/* Outlet for nested routes */}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
