/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import {
  StyledHeader,
  Logo,
  BtnCabecalho,
} from './Cabecalho.styled';

import { ActionsContainer } from '../UI';

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <ActionsContainer>
        <BtnCabecalho primary href="#Ajuda">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="#Sair" >
          Sair
        </BtnCabecalho>
      </ActionsContainer>
    </StyledHeader>
  );
};

export default Cabecalho;
