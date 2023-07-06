import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";

const StyledHeader = styled.header`
    background-color: #26282a;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`;
const Wrapper = styled.div`
    display: flex;
    gap: 2em;
    justify-content: space-between;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    // justify-content: flex-start;
    // flex-direction: column;
    width: 100%;
    position: static;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
  }

`;
const NavLink = styled(Link)`
  display: flex;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  min-width: 30px;
  svg {
    height: 20px;
  }
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

const NavDivider = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    @media screen and (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 0;
    }
`;

const MobileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2em;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

const MobileSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30px;
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
            <MobileWrapper>
            <Link href={'/'}><Image
                        src="/../public/logo-white.png"
                        alt=""
                        width="56"
                        height="32"
                        /></Link>
          <StyledNav mobileNavActive={mobileNavActive}>
          
            <NavDivider>
            
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>Products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
            </NavDivider>
            <NavDivider>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
            </NavDivider>

            
          </StyledNav>
            </MobileWrapper>

            <MobileSearchWrapper>
                <NavLink href={'/search'}>
                    <SearchIcon />
                </NavLink>

                <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
                    <BarsIcon />
                </NavButton>
            </MobileSearchWrapper>
            

        </Wrapper>
      </Center>
    </StyledHeader>
  );
}