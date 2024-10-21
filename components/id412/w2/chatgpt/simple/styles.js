import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const ChatGPTContainer = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
  max-width: 300px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

export const ResponseSection = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
`;

export const ResponseTitle = styled.h2`
  color: #333;
`;

export const ResponseText = styled.p`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
`;
