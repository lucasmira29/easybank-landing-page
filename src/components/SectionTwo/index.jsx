import styled from "styled-components";
import ItemList from "./ItemList";



const SectionStyled = styled.section`
    display: flex;
    align-items: center;
    height: 80vh;
    background-color: #f4f5f7;
    
    

    @media (max-width: 1200px){
        height: 110vh;
    }

    @media (max-width: 768px)  {
        flex-direction: column;
        text-align: center;
        height: 160vh;
    }

    @media (max-width: 460px)  {
        height: 190vh;
    }

    @media (max-height: 810px) {
        height: 210vh;
    }

    p {
        color: hsl(233, 8%, 62%);
    }


`
const TitleStyled = styled.h2`
    font-size: 2.5rem;
    color: hsl(233, 26%, 24%);
`



function SectionTwo() {
    return (
        <SectionStyled>
            <div className="container">
                <div className="row">
                    <div className="pt-lg-0 pt-5 col-12  text-xl-start text-center">
                        <TitleStyled>
                            Why choose Easybank?
                        </TitleStyled>
                        <p className="pt-md-5 pt-4 lh-base">
                            We leverage Open Banking to turn your bank account into your financial hub.
                            <br/>
                            Control your finances like never before.
                        </p>
                    </div>
                    <div className="row justify-content-center gap-5 pt-5">
                        <ItemList
                            src="./images/icon-online.png"
                            alt="icon-online"
                            title="Online Banking"
                        >
                           Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.

                        </ItemList>
                        <ItemList
                            src="./images/icon-budgeting.png"
                            alt="icon-budgeting"
                            title="Simple Budgeting"
                        >
                            See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.

                        </ItemList>

                        <ItemList
                            src="./images/icon-onboarding.png"
                            alt="icon-onboarding"
                            title="Fast Onboarding"
                        >
                            We don't do branches. Open your account in minutes online and start taking control of your finances right away.
                        </ItemList>

                        <ItemList
                            src="./images/icon-api.png"
                            alt="icon-api"
                            title="Open API"
                        >
                            Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                        </ItemList>
                    </div>
                </div>
            </div>




        </SectionStyled>
    )
}


export default SectionTwo;