import { Repo } from "../vite-env";
import styled from "styled-components";

const CardArticle = styled.article`
background-color: white ;
width: 300px;
height: 200px;
`;

const CardProject = (repo ) => {
  const repositorio: Repo = repo.repositorio
  console.log(repositorio);
  
  return (
    <CardArticle key={repositorio.id}>
      <p>{repositorio.name}</p>
      {/* <p>{repositorio.html_url}</p> */}
      <p>{repositorio.created_at}</p>
      <p>{repositorio.description}</p>
    </CardArticle>
  );
};

export default CardProject;
