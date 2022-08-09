import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #${props => `${props.backgroundColor}`};
  color: #${props => `${props.color}`};
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

`;