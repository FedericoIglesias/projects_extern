import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import InputFileUpload from "./button";

const SkillstArt = styled.article`
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  p {
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
  }
  div:hover {
    scale: 1.2;
  }
`;

const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 2%;
  width: 80%;
  margin: 5px;
  box-shadow: -1px -1px 5px white, 1px -1px 5px white, -1px 1px 5px white,
    1px 1px 5px white;
  margin: 10px 0;
`;
const SkillsSect = styled.section`
  display: flex;
  justify-content: space-around;
  color: white;
`;
const SkillsTitle = styled.p`
  color: white;
  font-size: 30px;
  text-align: center;
  text-decoration: underline;
`;

const Skills = () => {
  return (
    <>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsSect>
        <SkillstArt>
          <p>Hard Skills</p>
          <RatingDiv>
            <Typography style={{ marginRight: "0px" }} component="legend">
              Power BI
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Power Query</Typography>
            <Rating name="read-only" value={4} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Tableu</Typography>
            <Rating name="read-only" value={5} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">MySQL</Typography>
            <Rating name="read-only" value={5} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">R</Typography>
            <Rating name="read-only" value={4} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Google Sheets</Typography>
            <Rating name="read-only" value={3} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">HTML & CSS</Typography>
            <Rating name="read-only" value={3} readOnly />
          </RatingDiv>
        </SkillstArt>

        <SkillstArt>
          <p>Soft Skills</p>
          <RatingDiv>
            <Typography style={{ marginRight: "50px" }} component="legend">
              Time Management
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Communication Skills</Typography>
            <Rating name="read-only" value={3} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Team Work</Typography>
            <Rating name="read-only" value={4} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Problem Solving</Typography>
            <Rating name="read-only" value={5} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Creativity</Typography>
            <Rating name="read-only" value={4} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">Spanish</Typography>
            <Rating name="read-only" value={5} readOnly />
          </RatingDiv>
          <RatingDiv>
            <Typography component="legend">English</Typography>
            <Rating name="read-only" value={5} readOnly />
          </RatingDiv>
        </SkillstArt>
      </SkillsSect>
      <SkillsTitle>
        <InputFileUpload />
      </SkillsTitle>
    </>
  );
};

export default Skills;
