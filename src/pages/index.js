import styled from "styled-components";

const Container = styled.div`
  position: relative;
  color: white;
  width: 100%;
  height: 100vh;
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url("./assets/book-mobile.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 44px;

  span {
    color: ${({ theme }) => theme.colors.verdigris};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 50px;
  }
`;

const Text = styled.p`
  color: silver;
  font-size: 14px;
  margin: 8px 0;
`;

const Buttom = styled.button.attrs((props) => ({
  color: props.theme.colors,
}))`
  background: ${({ color }) =>
    `linear-gradient(to right, ${color.verdigris}, ${color.electricBlue})`};

  color: ${({ color }) => color.richBlackFogra29};
  padding: 10px;
  margin-top: 1rem;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
  width: 100%;
  transition: 0.3s;

  &:active {
    transform: scale(0.99);
  }

  ${({ theme }) => theme.media.desktop} {
    width: 30%;
    background: ${({ color }) => color.verdigris};

    &:hover {
      cursor: pointer;
      background: ${({ color }) => color.electricBlue};
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <Hero>
        <Title>
          <span>Hero</span> Section
        </Title>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          eveniet dolores, quisquam alias, eligendi doloribus, nobis fuga quos
          reiciendis aliquam blanditiis fugiat. Dolor saepe, voluptate labore
          sint ipsam corrupti odio? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Excepturi eveniet dolores, quisquam alias, eligendi
          doloribus, nobis fuga quos reiciendis aliquam blanditiis fugiat.
        </Text>
        <Buttom>Get Started</Buttom>
      </Hero>
    </Container>
  );
}
