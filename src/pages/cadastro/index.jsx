import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Column, Wrapper, Title, CriarText } from "./styles";

const Cadastro = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Crie sua conta e comece sua jornada de aprendizado com os melhores experts do mercado.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="Nome" leftIcon={<MdPerson />} name="nome" control={control} />
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />} name="senha" control={control} />
              <Button title="Cadastrar" type="submit" />
            </form>
            <CriarText onClick={() => navigate("/login")}>
              Já possui uma conta? Faça login.
            </CriarText>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };