import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
    ${props => props.fullWidth ? `
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    ` : `
        display: flex;
    `}
`;


export default function Spinner({fullWidth}) {
    return (
        <Wrapper fullWidth={fullWidth}>
            <ClipLoader speedMultiplier={2} color="#7315e5" />
        </Wrapper>
    );
};