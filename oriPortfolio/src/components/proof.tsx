import styled from "styled-components";
import imgBackground from "../img/background.jpg";

import Typist from "react-typist-component";

const ProofSection = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  div {
    position: absolute;
    left: 29%;
    top: 30%;
    font-size: 100px;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    color: white;
    p:nth-child(2){
            font-size: 70px;
        }
        span{
            font-weight: 700;
        }
  }
`;

const Proof = () => {
  return (
    <>
      <ProofSection>
        <img src={imgBackground} style={{ width: "100%" }} />
        <div>
          <p>
            Oriana <span>Rasello</span>
          </p>
          <Typist typingDelay={100} >
            <p>Data Analytics Jr</p>
          </Typist>
        </div>
      </ProofSection>
    </>
  );
};

export default Proof;
