import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Column, Title, Wrapper } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para aprender com experts, dominar as principais tecnologias e entrar nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <h2>Faça seu Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />} name="senha" control={control} />
              <Button title="Entrar" type="submit" />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };