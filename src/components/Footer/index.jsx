import styled from "styled-components";
import { ReactComponent as Logo } from '@/assets/logo-white.svg';
import FooterIcons from "./FooterIcons";
import Button from "../Button";



const FooterStyled = styled.footer`
    display: flex;
    background-color: hsl(233, 26%, 24%);
    height: 25vh;
    align-items: center;
    padding: 0 10%;


    @media (max-width: 1200px) {
        padding: 3%;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        height: 50vh;
    }

    @media (max-width: 375px) {
        height: 60vh;
    }

    a:hover {
        color: hsl(136, 65%, 51%);
    }

    a, p {
        color: hsl(233, 8%, 62%);;
        text-decoration: none;
    }


    ul {
        column-count: 2;
        column-gap: 3em;
        line-height: 2rem;
    }


    .row {
        flex: 1;
    }

    .col {
        flex: 1;
    }

    .div__logo {
        
        @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            padding-top: 50px;
        }

    }


`



function Footer() {
    return (
        <FooterStyled className="gap-md-0 gap-3">
            <div className="row">
                <div className="div__logo">
                    <Logo />
                    <FooterIcons />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="fs-6">
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <Button>Request invite</Button>
                    <p className="fs-6 pt-4">© EasyBank. All Rights Reserved</p>
                </div>
            </div>

        </FooterStyled>
    )
}


export default Footer;