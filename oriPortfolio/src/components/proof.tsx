import styled from "styled-components";
import imgBackground from '../img/background.jpg'

const ProofSection = styled.section`
    position: relative;
    height: 90vh;
    display: flex;
    padding: 5% 0 ;
    background-color: black;
    div {
        position: absolute;
        left: 29%;
        top: 30%;
        font-size: 100px;
        background-color: rgba(0,0,0,0.6);
        padding: 0px;
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



    return(
        <>
        <ProofSection>
            <img src={imgBackground} style={{ width: '100%'}}/>
            <div>
                <p>Oriana <span>Rasello</span></p>
                <p>Data Analyst</p>
            </div>
        </ProofSection>
        </>
    )
}

export default Proof