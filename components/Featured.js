"use client";

import Image from 'next/image';
import styled from "styled-components";
import Center from "@/components/Center";
import Button from './Button';

const Bg = styled.div`
    background-color: #26282a;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

const Desc = styled.p`
    color: #bbb;
    font-size: .8rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    align-items: center;
`;

const StyledImage = styled(Image)`
    aspect-ratio: 1.726;
    width="656" 
    height="380"
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FixedWidthDiv = styled.div`
    display: flex;
    width: 80%;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1em;
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>
                        Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Desc>
                        <ButtonsWrapper>
                            <Button white outline size="l">Read more</Button>
                            <Button primary size="l">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                </svg>

                                Add to cart
                            </Button>
                        </ButtonsWrapper>
                        
                        </div>
                    </Column>
                    <Column>
                    <FixedWidthDiv >
                        <StyledImage 
                            layout="responsive"
                            objectFit="cover"
                            src={'/../public/macbook.png'}
                            width="656" 
                            height="380"
                        />
                    </FixedWidthDiv>
                    
                    </Column>
                </Wrapper>
                
                
            </Center>
        </Bg>
    );
};