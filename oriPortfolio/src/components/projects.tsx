import styled from "styled-components";
import CardProject from "./card";
import { Project } from "../vite-env";
import cyclistics from '../img/cyclistics.png'
import simpsons from '../img/theSimpsons.png'


const TitleP = styled.p`
  font-size: 30px;
  color: white;
  text-align: center;
  padding: 10% 0;
`;
const projectR: Project = {
  image: "oli",
  alt: "oli",
  name: "oli",
  description: "oli",
  url:"https://public.tableau.com/views/Cyclisticproject_17053805753600/Dashboard1?:language=es-ES&:sid=&:display_count=n&:origin=viz_share_link"
};

const projectCyclistics = {
    image:cyclistics,
    alt:'img from tableu',
    name:'Cyclistics',
    desciption:'ACM1PT',
    url:"https://public.tableau.com/views/Cyclisticproject_17053805753600/Dashboard1?:language=es-ES&:sid=&:display_count=n&:origin=viz_share_link"
};

const projectSimpsons = {
    image: simpsons,
    alt:'img from tableu',
    name: 'The decline of The Simposns',
    desciption: 'ads',
    url:'https://public.tableau.com/views/TheendofaneraTheSimpsons/Dashboard1?:language=es-ES&:sid=&:display_count=n&:origin=viz_share_link',
}

const Projects = () => {
  return (
    <>
      <TitleP>Projects</TitleP>
      <CardProject image={projectR.image} alt={projectR.alt} name={projectR.name} description={projectR.description} url={""} />
        <CardProject image={projectCyclistics.image} alt={projectCyclistics.alt} name={projectCyclistics.name} description={projectCyclistics.desciption} url={projectCyclistics.url}/>
        <CardProject image={projectSimpsons.image} alt={projectSimpsons.alt} name={projectSimpsons.name} description={projectSimpsons.desciption} url={projectSimpsons.url}/>
        <CardProject image={""} alt={""} name={""} description={""} url={""}/>
    </>
  );
};

export default Projects;

