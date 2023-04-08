import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const InputLabel = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const InputTitle = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InputType = styled.input`
  height: 30px;
  border: 1px solid #aed7e5;
  border-radius: 5px;
  padding: 5px;
`;

export const SelectType = styled.select`
  height: 30px;
  border-color: #aed7e5;
  border-radius: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  height: 30px;
  background-color: #aed7e5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
