import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
  background-color: #333333;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333333;
`;
export const Card = styled.div`
  color: #fff;
  width: 250px;
  height: 500px;
  margin: 5px;
  background-color: #424242;
  border-radius: 3px;
  padding: 15px;
  text-decoration: none;
`;
export const Date = styled.p`
  background-color: #666;
  border-radius: 3px;
  padding: 3px;
`;
export const Header = styled.div`
  position: fixed;
  display: flex;
  padding: 20px;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #2c6a9e;
  color: #000;
  box-shadow: 0px 4px 18px -4px rgba(0, 0, 0, 0.75);
  text-align: center;
`;
export const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin-left: 10px;
  width: 300px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  background-color: #292929;
`;
export const Button = styled.button`
  border: none;
  margin-left: 10px;
  border-radius: 3px;
  font-size: 16px;
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: #292929;
  &:hover {
    background-color: #666;
  }
`;
