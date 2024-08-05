import styled from "styled-components";
import Header from "../../components/Header";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
import SectionThree from "../../components/SectionThree";
import Footer from "../../components/Footer";

const MainContainer = styled.main`
    flex: 1;
    padding-top: 8vh;
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function Home() {
    return (
        <>
            <Header />
            <PageContainer>
                <MainContainer>
                    <SectionOne />
                    <SectionTwo />
                    <SectionThree />
                </MainContainer>
            </PageContainer>
            <Footer />
        </>
    )
}


export default Home;