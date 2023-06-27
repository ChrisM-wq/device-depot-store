"use client";

import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 1em 2em;
`;

export default function Center({ children }) {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    );
}