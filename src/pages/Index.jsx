import React from "react";
import { WithRouter } from "../utils/Navigation";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Card from "../components/CardPokemon";

const Index = () => {
  return (
    <Layout>
      <Container>
        <Card/>
      </Container>
    </Layout>
  );
};

export default WithRouter(Index);
