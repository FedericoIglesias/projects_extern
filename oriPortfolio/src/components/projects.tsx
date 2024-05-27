/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CardProject from "./card";
import { Repo } from "../vite-env";

const TitleP = styled.p`
  font-size: 30px;
  color: black;
  text-align: center;
  padding: 5% 0;
  text-decoration: underline;
`;

const CardSection = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
`;

const Projects = () => {
  const [projects, setProject] = useState([]);

  const API_REPO = "https://api.github.com/users/Orianicole/repos";

  const repos = useCallback(async () => {
    const listRepos = [];
    try {
      const res = await fetch(API_REPO);
      listRepos.push(await res.json());
      console.log(listRepos[0]);
      setProject(listRepos[0]);
    } catch (e) {
      console.error(e);
    }
  }, [API_REPO]);

  useEffect(() => {
    repos();
  }, []);

  return (
    <section style={{backgroundColor: 'white'}}>
      <TitleP>Projects</TitleP>
      <CardSection>
        {projects.map((repo: Repo, index) => {
          return <CardProject repositorio={repo} key={index} />;
        })}
      </CardSection>
    </section>
  );
};

export default Projects;
