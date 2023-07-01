import Image from "next/image";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from './Button';
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const Bg = styled.div`
    background-color: #26282a;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;

const Desc = styled.p`
    color: #bbb;
    font-size: .8rem;
    @media screen and (min-width: 768px) {
        font-size: .9rem;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    @media screen and (max-width: 768px) {
        
        img {
            display: block;
            margin: 0 auto;
        }
        display: flex;
        flex-direction: column;
    div:nth-child(1) {
        order: 2;
    }
}
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
    margin-top: 25px;
`;

export default function Featured({ product }) {

    const {addProduct} = useContext(CartContext);
    const url = '/product/'+product._id;

    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                    <div>
                        <Title>{product?.title}</Title>
                        <Desc>{product?.description}</Desc>
                        <ButtonsWrapper>
                            <Link href={url}>
                                <Button white outline size="l">Read more</Button>
                            </Link>
                            <Button primary size="l" onClick={() => addProduct(product._id)}>
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
                            src={'/../public/macbook.png'}
                            alt=""
                            width="656" 
                            height="380"
                            priority={true}
                            layout="responsive"
                        />
                    </FixedWidthDiv>
                    
                    </Column>
                </Wrapper>
                
                
            </Center>
        </Bg>
    );
};