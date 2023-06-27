import styled, { css } from "styled-components";

const StyledButton = styled.button`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-flex;
    svg{
        height: 16px;
        margin-right: 5px;
    }
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #26282a;
    `}
    ${props => props.white && props.outline && css`
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.primary && css`
        background-color: #7315e5;
        color: #fff;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg{
            height: 20px;
        }
    `}
`;

export default function Button({ children, ...rest }) {
    return (
        <StyledButton { ...rest }>{ children }</StyledButton>
    );
};