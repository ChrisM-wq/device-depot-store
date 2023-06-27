"use client";
import Link from "next/link";
import styled from "styled-components";

import Image from 'next/image';

//#7315e5
const StyledHeader = styled.header`
    background-color: #26282a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3em;
    height: 60px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`;

const StyledNav = styled.nav`
    display: flex;
    width: 100%;
    gap: 2em;
    justify-content: space-between;
`;

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

export default function Header() {

    return (
        <StyledHeader>

            <StyledNav>

                <StyledDefault>
                    <Link href={'/'}><Image src="/../public/logo-white.png" alt="me" width="56" height="32" /></Link>
                    <StyledLinks href={'/'}>Home</StyledLinks>
                    <StyledLinks href={'/products'}>Products</StyledLinks>
                    <StyledLinks href={'/categories'}>Categories</StyledLinks>
                </StyledDefault>
                <StyledDefault>
                    <StyledLinks href={'/account'}>Account</StyledLinks>
                    <StyledLinks href={'/cart'}>Cart (0)</StyledLinks>
                </StyledDefault>
                
            </StyledNav>

        </StyledHeader>
    );
}