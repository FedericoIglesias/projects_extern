import { useScrollTrigger } from "@mui/material";
import styled from "styled-components";



const HeaderSection = styled.section`
background-color: rgba(255, 255, 255,0.9);
width: 100%;
  position: fixed;
  z-index: 10;
  height: 7vh;
  padding-right: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0 10px;
    color: black;
  }
`;
const Header = () => {

  return (
    <>
      <HeaderSection >
        <p>About me</p>
        <p>Portfolio</p>
        <p>Resume</p>
      </HeaderSection>
    </>
  );
};

export default Header;
