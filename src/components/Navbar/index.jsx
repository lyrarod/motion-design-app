import { useState } from "react";
import styled from "styled-components";
// import Link from "next/link";

import { MdMenu, MdClose } from "react-icons/md";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, goldenrod, gold);
  box-shadow: 0 2px 2px #1112;
  padding: 10px 2rem;
  z-index: 10000;
`;

const Ul = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100vh)")};
  background: linear-gradient(to right, goldenrod, gold);
  box-shadow: ${({ open }) => (open ? "0 2px 2px #1112" : "none")};
  transition: transform 0.3s;
  transition-delay: ${({ open }) => (open ? "0" : ".3s")};
  z-index: -1000;

  li {
    /* opacity: ${({ open }) => (open ? 1 : 0)}; */
    /* transition: opacity 0.3s ease-in-out; */
    /* transition-delay: ${({ open }) => (open ? ".3s" : "0")}; */
  }

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
  list-style-type: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 6px 0;
  /* padding: 4px 0; */
  background: goldenrod;
  width: 100%;
  text-align: center;

  opacity: ${({ open }) => (open ? 1 : 0)};
  /* transition: ${({ open }) => (open ? ".3s" : "none")}; */
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
  }
`;

const Logo = styled.h1`
  color: #111;
  /* font-family: "Lobster", cursive; */
  font-family: "Permanent Marker", cursive;
  /* font-size: 2rem; */
  /* text-transform: uppercase; */
`;

const WrapperMenuIcon = styled.div`
  display: grid;
  place-content: center;
  border-radius: 50%;

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
      <Logo>Logo</Logo>
      <Ul open={open}>
        {links.map((link, i) => {
          const delay = (i + 2) * 100;
          return (
            <Li open={open} delay={delay} key={i}>
              {link} {delay}
            </Li>
          );
        })}
      </Ul>
      <WrapperMenuIcon>
        {open ? (
          <MdClose size={"1.5em"} onClick={toggleMenuIcon} />
        ) : (
          <MdMenu size={"1.5em"} onClick={toggleMenuIcon} />
        )}
      </WrapperMenuIcon>
    </Nav>
  );
};
