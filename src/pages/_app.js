import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Navbar } from "../components/Navbar";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Poppins', sans-serif;
  }

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
  media: {
    desktop: "@media (min-width: 500px)",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
