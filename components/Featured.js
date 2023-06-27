"use client";

import Image from 'next/image';
import styled from "styled-components";
import Center from "@/components/Center";

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
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    aspect-ratio: 1.726;
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>
                        Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                        </Desc>
                    </div>
                    <div>
                    <StyledImage 
                    src="/../public/macbook.png" 
                    alt="me"
                    width="656" 
                    height="380"
                    />
                    </div>
                </Wrapper>
                
                
            </Center>
        </Bg>
    );
};