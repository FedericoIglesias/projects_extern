import styled from "styled-components";
import CardProject from "./card";
import { Project } from "../vite-env";
import cyclistics from "../img/cyclistics.png";
import simpsons from "../img/theSimpsons.png";
import fileSimpsons from "../files/theSimpsons-3.pdf";
import fileAmazon from "../files/amazonProducts.pdf";
import fileCyclistic from "../files/cyclistic.pdf";

const TitleP = styled.p`
  font-size: 30px;
  color: white;
  text-align: center;
  padding: 10% 0;
  text-decoration: underline;
`;

const CardSections = styled.section`
  display: grid;
  grid-template-areas: "card1 card2" "card3 card4";
  div {
    margin: 10px auto;
    min-width: 300px;
    min-height: 50px;
  }
`;

const projectR: Project = {
  image: "oli",
  alt: "img from R",
  name: "project in R",
  description:"",
  url: fileAmazon,
};

const projectAmazon: Project = {
  image: "oli",
  alt: "img from Amazon",
  name: "Products Amazon",
  description:
    "The objective of this project was to create an interactive dashboard in Power BI to evaluate the sales of Amazon products in Argentina during 2018 and 2019. The database has one fact table and 5 dimension tables.",
  url: fileAmazon,
};

const projectCyclistics = {
  image: cyclistics,
  alt: "img from tableu",
  name: "Cyclistics",
  desciption: "Cyclistic is a bike sharing company in Chicago. In this project the company wants to understand how casual users and members use Cyclistic differently. With these results a marketing strategy will be designed to convert casual riders to annual members.",
  url: fileCyclistic,
};

const projectSimpsons = {
  image: simpsons,
  alt: "img from tableu",
  name: "The decline of The Simposns",
  desciption: "I am a big fan of the Simpsons, they have been with me since my childhood and to this day I still laugh at those jokes that I heard probably a hundred times. However, even though the series is currently in its 35th season, it is no longer what it used to be.",
  url: fileSimpsons,
};

const Projects = () => {
  return (
    <>
      <TitleP>Projects</TitleP>
      <CardSections>
        <div>
          <CardProject
            image={projectAmazon.image}
            alt={projectAmazon.alt}
            name={projectAmazon.name}
            description={projectAmazon.description}
            url={projectAmazon.url}
          />
        </div>
        <div>
          <CardProject
            image={projectCyclistics.image}
            alt={projectCyclistics.alt}
            name={projectCyclistics.name}
            description={projectCyclistics.desciption}
            url={projectCyclistics.url}
          />
        </div>
        <div>
          <CardProject
            image={projectSimpsons.image}
            alt={projectSimpsons.alt}
            name={projectSimpsons.name}
            description={projectSimpsons.desciption}
            url={projectSimpsons.url}
          />
        </div>
        <div>
          <CardProject
            image={projectR.image}
            alt={projectR.alt}
            name={projectR.name}
            description={projectR.description}
            url={projectR.url}
          />
        </div>
      </CardSections>
    </>
  );
};

export default Projects;
