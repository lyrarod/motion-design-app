import styled from "styled-components";

const Container = styled.div`
  position: relative;
  color: white;
  width: 100%;
  height: 200vh;
`;

const Hero = styled.div`
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
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
  font-size: 40px;

  span {
    color: goldenrod;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 50px;
  }
`;

const Text = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  color: whitesmoke;
`;

const Buttom = styled.button`
  background: linear-gradient(to right, goldenrod, gold);
  color: #111;
  padding: 10px;
  margin-top: 1rem;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  width: 100%;

  &:active {
    transform: scale(0.99);
  }

  ${({ theme }) => theme.media.desktop} {
    cursor: pointer;
    width: 40%;

    &:hover {
      background: linear-gradient(to left, goldenrod, gold);
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
          sint ipsam corrupti odio?
        </Text>
        <Buttom>Get Started</Buttom>
      </Hero>
    </Container>
  );
}
