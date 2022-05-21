import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';


export const Container = styled.div`
`;

export const CustomNav = styled.nav`
  background: transparent;
  position: absolute;
  padding-bottom: 10%;
  text-decoration: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const CustomText = styled.h1`
font-family: 'Libre Baskerville', serif;
color: white;
font-size: 100px;
`;
