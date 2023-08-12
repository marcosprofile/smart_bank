import { React, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import ContainerWrapper from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

import { BtnTheme } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  }

  return (
    <ThemeProvider theme={theme ? lightMode : darkMode}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <SwitcherTheme theme={theme} />
      </BtnTheme>
      <Cabecalho />
      <ContainerWrapper />
    </ThemeProvider>
  );
}

export default App;
