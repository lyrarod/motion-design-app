import { useState } from "react";
import styled from "styled-components";
// import Link from "next/link";

import { MdMenu, MdClose } from "react-icons/md";

const Nav = styled.nav.attrs((props) => ({
  color: props.theme.colors,
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ color }) => color.richBlack};
  /* background: ${({ color }) =>
    `linear-gradient(${color.verdigris}, ${color.electricBlue})`}; */
  background: #3aafb9;
  box-shadow: 0 2px 2px #1112;
  padding: 0.4rem 2rem;
  z-index: 1000;
`;

const Ul = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background: radial-gradient(#093a3e, #001011); */
  background: ${({ theme }) => theme.colors.richBlackFogra29};
  box-shadow: -3px 0 3px #0002;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100vw)")};
  transition: transform 0.4s;
  transition-delay: ${({ open }) => (open ? "0" : ".3s")};
  z-index: -1000;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    padding-right: 2rem;
    transform: translateY(0);
    background: transparent;
    height: 100%;
    box-shadow: none;

    li {
      opacity: 1;
    }
  }
`;

const Li = styled.li`
  width: 100%;
  list-style-type: none;
  text-transform: uppercase;
  letter-spacing: 7px;
  padding: 10px 0;

  box-shadow: 0 1px 1px #fff1;
  &:last-of-type {
    box-shadow: none;
  }

  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.verdigris};

  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s;
  transition-delay: ${({ open, delay }) => (open ? `${delay}ms` : "none")};

  ${({ theme }) => theme.media.desktop} {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    background: none;
    margin: 0 0 0 10px;
    width: initial;
    padding: 4px;
    box-shadow: none;
  }
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.richBlackFogra29};
  font-family: "Permanent Marker", cursive;
  font-size: 32px;
`;

const WrapperMenuIcon = styled.div`
  display: grid;
  place-content: center;

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Portfolio", "Services", "About", "Contact"];

  const toggleMenuIcon = () => setOpen((prevState) => !prevState);

  return (
    <Nav open={open}>
      <Logo>Logo.</Logo>
      <Ul open={open}>
        {links.map((link, i) => {
          const delay = (i + 3) * 100;
          return (
            <Li open={open} delay={delay} key={i}>
              {link}
            </Li>
          );
        })}
      </Ul>
      <WrapperMenuIcon>
        {open ? (
          <MdClose color="#3AAFB9" size={"2em"} onClick={toggleMenuIcon} />
        ) : (
          <MdMenu color="#001011" size={"2em"} onClick={toggleMenuIcon} />
        )}
      </WrapperMenuIcon>
    </Nav>
  );
};
