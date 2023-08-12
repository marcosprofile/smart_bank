import styled from 'styled-components';
import { corPrimaria } from './variaveis';

export const Icone = styled.div`
  height: 24px;
  width: 24px;
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.text};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Button = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${corPrimaria};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const SaldoContainer = styled.div`
  font-size: 26px;
  padding: 20px 0;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Detalhe = styled.span`
  color: ${corPrimaria};
  font-size: 24px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnTheme = styled.button`
  position: absolute;
  right: 260px;
  top: 29px;
  padding: 4px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: none;
  color: #FFF;
  margin-right: 12px;

  @media (max-width: 800px) {
    right: 236px;
  };
`;