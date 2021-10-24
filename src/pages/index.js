import styled, { keyframes } from "styled-components";

import Image from "next/image";
import heroImage from "../../public/assets/hero.svg";

const slide = keyframes`
 from{
   transform: translateX(-100px);
  }  
  to{    
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadein = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 200vh;
  overflow: hidden;
`;

const Hero = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  color: ${({ theme }) => theme.colors.richBlackFogra29};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.colors.verdigris}, ${theme.colors.electricBlue})`};

    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 9%);

    opacity: 0;
    animation-name: ${fadein};
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }
`;

const ImageStyled = styled(Image)`
  opacity: 0;
  animation-name: ${fadein};
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 4s;
  animation-fill-mode: forwards;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.richBlackFogra29};
  /* font-size: 40px; */
  line-height: 1;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-top: 4px solid #001011;
  border-bottom: 4px solid #001011;
  text-align: center;
  letter-spacing: 1px;

  opacity: 0;
  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-fill-mode: forwards;

  span {
    color: ${({ theme }) => theme.colors.richBlack};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: 50px;
  }
`;

const Text = styled.p`
  font-size: 14px;

  opacity: 0;
  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
`;

const Buttom = styled.button`
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.verdigris}, ${theme.colors.electricBlue})`};

  box-shadow: 0 3px 4px #0002;

  color: ${({ theme }) => theme.colors.richBlackFogra29};
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
  transition: background-color 0.3s;

  opacity: 0;

  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;

  ${({ theme }) => theme.media.desktop} {
    width: 40%;
    background: ${({ theme }) => theme.colors.verdigris};

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.electricBlue};
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <Hero>
        <ImageStyled src={heroImage} alt="Hero Image" />
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
