import styled from 'styled-components';
import { corPrimaria } from '../UI/variaveis';

export const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${props => props.primary ? 'white' : corPrimaria};
  color: ${props => props.primary ? corPrimaria : 'white'};
`;

export const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 48px;
  height: 90px;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0 1.5rem;
  };
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;