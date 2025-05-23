import React from "react";

import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 Top da Semana</TitleHighlight>
          <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={25} />
          <UserInfo nome="José Silva" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={65} />
        </Column>
      </Container>
    </>
  );
};

export { Feed };