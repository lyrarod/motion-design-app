import styled, { keyframes } from "styled-components";

const slide = keyframes`
 from{
   transform: translateX(100px);
  }
  
  to{    
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div.attrs((props) => ({
  color: props.theme.colors,
}))`
  position: relative;
  width: 100%;
  min-height: 200vh;
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.richBlackFogra29};
`;

const Title = styled.h1`
  font-size: 40px;

  opacity: 0;

  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  span {
    color: ${({ theme }) => theme.colors.richBlack};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 50px;
  }
`;

const Text = styled.p`
  /* color: silver; */
  font-size: 14px;

  opacity: 0;

  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
`;

const Buttom = styled.button.attrs((props) => ({
  color: props.theme.colors,
}))`
  background: ${({ color }) =>
    `linear-gradient(to right, ${color.verdigris}, ${color.electricBlue})`};

  box-shadow: 0 2px 2px #0002;

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

  opacity: 0;

  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.9s;
  animation-fill-mode: forwards;

  &:active {
    transform: scale(0.99);
  }

  ${({ theme }) => theme.media.desktop} {
    width: 40%;
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          delectus ducimus facere sint saepe reprehenderit reiciendis maiores,
          fugiat inventore aliquid nisi ab unde blanditiis vel perspiciatis
          dignissimos quae. Hic, doloribus!
        </Text>
        <Buttom>Get Started</Buttom>
      </Hero>
    </Container>
  );
}
