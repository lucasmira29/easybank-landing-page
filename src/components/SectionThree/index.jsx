import styled from "styled-components";
import Cards from "./Cards";

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 80px;
    background-color: #FAFAFA;
    height: 80vh;
    padding: 5% 15%;

    @media (max-width: 1199px) {
        height: 140vh;
    }

    @media (max-width: 767px) {
        height: 250vh;
    }

    @media (max-height: 810px) {
        height: 325vh;
        padding-top: 10em;
    }

`



function SectionThree() {
    return (
        <SectionStyled className="container-fluid align-items-md-start align-items-center justify-content-md-start justify-content-center">

          
                <h3 className="fs-1">Latest Articles</h3>
                <Cards/>
            
        </SectionStyled>
    )
}


export default SectionThree;