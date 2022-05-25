import styled from 'styled-components';
import * as palette from '../../variables';

export const Container = styled.div`

`;

export const CustomNav = styled.nav`
  border: white 2px bold;
  width: 150px;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  cursor: pointer;
  background: ${palette.pasterYello};
  text-align: center;
  color: ${palette.notexactlyblack}; 
  `;
