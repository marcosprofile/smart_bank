import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

import {
  Container,
  Conteudo,
} from "./Container.styled";

export default function ContainerWrapper() {
  return (
    <Container>
      <Titulo>Olá Marcos Ferreira!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};