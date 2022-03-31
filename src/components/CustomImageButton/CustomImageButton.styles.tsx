import styled from 'styled-components';
interface props {
    url: String;
}

export const Container = styled.div`
`;

export const customButton = styled.button<props>`
    background: ${props => props.url ? "palevioletred" : "white"};
`;