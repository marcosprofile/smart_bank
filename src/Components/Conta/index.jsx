import React, { useState } from "react";

import {
  Box,
  Button,
  Saldo,
  SaldoContainer,
  Detalhe,
} from '../../Components/UI';

import {
  FaRegEye,
  FaRegEyeSlash,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <SaldoContainer>
        Saldo disponível{" "}
        <span>
          <FaMoneyBillTrendUp size="24px" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 12.540,00{" "}
          </Saldo>
        ) : null}
      </SaldoContainer>

      <Button onClick={toggleHandler}>
        {toggleState ? <FaRegEye size="24px" /> : <FaRegEyeSlash size="24px" />}
      </Button>
    </Box>
  );
};

export default Conta;
