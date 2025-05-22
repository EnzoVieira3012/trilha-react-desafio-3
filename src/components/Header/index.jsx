import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate(); // Hook para navegação entre páginas

  // Função para redirecionar para a página de login
  const handleLogin = () => {
    navigate("/login");
  };

  // Função para redirecionar para a página de cadastro
  const handleCadastro = () => {
    navigate("/cadastro");
  };

  // Renderiza o menu com base no estado de autenticação
  const renderMenu = () => {
    if (autenticado) {
      return (
        <>
          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </>
      );
    }

    return (
      <>
        <MenuRight href="/">Home</MenuRight>
        <Button title="Entrar" onClick={handleLogin} /> {/* Botão com navegação */}
        <Button title="Cadastrar" onClick={handleCadastro} /> {/* Botão com navegação */}
      </>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" />
          {renderMenu()}
        </Row>
        <Row>
          {autenticado && (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };