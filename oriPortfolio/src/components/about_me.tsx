import styled from "styled-components";
import profile from "../img/profile.jpg";

const AboutSection = styled.section`
  height: 100vh;
  background-color: black;
  display: flex;
  color: white;
  div {
    width: 50%;
    padding: 10% 0;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 500px;
    :nth-child(1) {
      font-size: 30px;
      text-decoration: underline;
    }
    :nth-child(2) {
      font-size: 20px;
    }
    :nth-child(3) {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

const AboutMe = () => {
  return (
    <>
      <AboutSection>
        <div>
          <img
            src={profile}
            alt=""
            style={{ width: "400px", height: "500px" }}
          />
        </div>
        <div>
          <p>About Me</p>
          <p>
            Since I was little I have been interested in the world of
            technology, in 2017 I graduated as a Multimedia Design Technician.
            This allowed me to develop freelance in graphic design, web,
            audiovisual and photography. In 2018 I started studying Psychology
            at the University of Buenos Aires, which gave me strong analytical
            skills. In 2021 I moved to the United States and started to know the
            working world there, I have taken courses in: Business English,
            Social Media: creating content & personal branding and Digital
            Marketing. In 2022 I met the world of data analysis and it
            fascinated me, it combines two things I like, technology and
            analytics. I obtained the Google Data Analytics Professional
            Certificate and the Google Business Intelligence Professional
            Certificate. I recently trained in Power Bi and plan to continue my
            training.
          </p>
          <p>
            "In a constantly evolving world, the only constant is continuous
            learning."
          </p>
        </div>
      </AboutSection>
    </>
  );
};

export default AboutMe;
