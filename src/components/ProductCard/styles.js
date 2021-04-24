import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-clip: border-box;
  border-radius: 0.25rem;
  margin: 0.5em;
  background-color: #fff;
`;
export const Box = styled.div`
display:grid;
grid-template-columns:80% 20%;
padding: 0 1.25rem; 
`;
export const Image=styled.img`
    width:100%;
    height:50vh;
`
export const Discount=styled.div`
border-radius:50%;
background-color:#faee00;
text-align: center;
`
export const TextPrice=styled.p`
padding:0 1.25rem;
font-weight:600;
`
export const Button = styled.input`
  margin: 0.5em auto;
  text-align: center;
  width: 80%;
  background-color: transparent;
  background-color: #a81f8d;
  color: #fff;
  padding: 0.8rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border-style: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;