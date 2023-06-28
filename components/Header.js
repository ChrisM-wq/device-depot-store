import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";

//#7315e5
const StyledHeader = styled.header`
    background-color: #26282a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 3em;
    height: 60px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`;

const StyledNav = styled.nav`
    ${props => props.mobileNavActive ? `
        display: block;
    ` : `
        display: none;
    `}
    display: flex;
    width: 100%;
    gap: 2em;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
      }
`;

// const StyledNav = styled.nav`
//   ${props => props.mobileNavActive ? `
//     display: block;
//   ` : `
//     display: none;
//   `}
//   gap: 15px;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 70px 20px 20px;
//   background-color: #222;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     position: static;
//     padding: 0;
//   }
// `;

const StyledDefault = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
`;

const StyledLinks = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 16px;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    letter-spacing: 0.4px;
    &:hover {
        color: #bbb;
    }
`;

const StyledBar = styled.div`
    background-color: #7315e5;
    width: 100%;
    height: 40px;
`;


const NavLink = styled(Link)`
  display: block;
  color:#bbb;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);
    const [mobileNavActive,setMobileNavActive] = useState(false);
    return (
        <>
        <StyledBar />
        <StyledHeader>
           
            <StyledNav>

                <StyledDefault>
                    <Link href={'/'}><Image
                        src="/../public/logo-white.png"
                        alt=""
                        width="56"
                        height="32"
                        /></Link>
                    <StyledLinks href={'/'}>Home</StyledLinks>
                    <StyledLinks href={'/products'}>Products</StyledLinks>
                    <StyledLinks href={'/categories'}>Categories</StyledLinks>
                </StyledDefault>
                <StyledDefault>
                    <StyledLinks href={'/account'}>Account</StyledLinks>
                    {/* <StyledLinks href={'/cart'}>Cart (0)</StyledLinks> */}
                    <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                </StyledDefault>
                
            </StyledNav>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </StyledHeader>
        </>
    );
}