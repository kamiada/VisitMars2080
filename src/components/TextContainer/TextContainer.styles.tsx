import styled from 'styled-components';
import * as palette from '../../variables';
export const Container = styled.div`
  width: 300px;
  height: 400px;
  border: 1px white solid;
  background-color: ${palette.creamWhite};
  color: ${palette.notexactlyblack};
  text-align: justify;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  top: 20%;
  position: absolute;
  line-height: 1.5;
  opacity: 0.9;
`;