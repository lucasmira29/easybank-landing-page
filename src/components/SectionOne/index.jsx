import styled from "styled-components";
import Button from "../Button";
import backgroundDesktop from "@/assets/bg-intro-desktop.png";

const SectionStyled = styled.section`
    background-color: #fafafa;
    display: flex;
    height: 80vh;

    @media (max-width: 768px) {
        justify-content: center; 
        align-items: center; 
    }

    .custom-div {
        position: relative;
        overflow: hidden;
    }

    .textDiv {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 10% 5%;
        width: 50%;

        @media (max-width: 768px) {
            padding: 0; 
            gap: 1em;
            width: auto;
            align-items: center; 
            justify-content: center; 
            text-align: center; 
        }
    }

    .textDiv h1 {
        color: hsl(233, 26%, 24%);
        font-size: 3.2em;
        font-weight: 400;
        width: 60%;
        text-align: left;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 3rem;
            width: auto;
        }

        @media (max-width: 382px) {
            font-size: 2.5rem;
            
        }
    }

    .boxText {
        width: 100%;
    }

    .boxText p {
        color: hsl(233, 8%, 62%);
        font-size: 1.3rem;
        line-height: 1.2em;
        text-align: left;
        width: 75%;

        @media (max-width: 768px) {
            text-align: center;
            width: auto;
        }
        
        @media (max-width: 491px) {
            font-size: 1.2rem;
        }
    }

    button {
        width: 10em;
        height: 3em;
    }

    .backgroundImg {
        position: absolute;
        left: 50%;
        bottom: -15%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .mockupsImg {
        position: absolute;
        left: 65%;
        bottom: 0;

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

function SectionOne() {
    return (
        <SectionStyled>
            <div className="container-fluid custom-div">
                <div className="textDiv">
                    <h1>
                        Next generation digital banking
                    </h1>
                    <div className="boxText">
                        <p>
                            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                        </p>
                    </div>
                    <Button>
                        Request Invite
                    </Button>
                </div>
                <img src={backgroundDesktop} alt="Background" className="backgroundImg" draggable="false" />
                <img src="./images/image-mockups.png" className="mockupsImg" draggable="false" />
            </div>
        </SectionStyled>
    );
}

export default SectionOne;
