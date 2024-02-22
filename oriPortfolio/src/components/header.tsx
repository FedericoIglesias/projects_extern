import styled from "styled-components";

const HeaderSection = styled.section`
  height: 7vh;
  padding-right: 20px;
  background-color: white;
  display: flex;
  justify-content: end;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0 10px;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderSection>
        <p>About me</p>
        <p>Portfolio</p>
        <p>Resume</p>
      </HeaderSection>
    </>
  );
};

export default Header;
