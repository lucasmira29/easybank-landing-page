import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const DivStyled = styled.div`
    display: flex;
    gap: 16px;
    padding-top: 24px;
    .icons {
        cursor: pointer;
        color: #fff;
        padding-top: 5%;
    }

    .icons:hover {
        color: hsl(136, 65%, 51%);
    }
`



function FooterIcons() {
    return (
        <DivStyled>
            <FontAwesomeIcon 
                className="icons"
                icon={faSquareFacebook} 
                size="xl" 
            />
             <FontAwesomeIcon 
                className="icons"
                icon={faYoutube} 
                size="xl" 
            />
            <FontAwesomeIcon 
                className="icons"
                icon={faTwitter} 
                size="xl" 
            />
             <FontAwesomeIcon 
                className="icons"
                icon={faPinterest} 
                size="xl"   
            />
              <FontAwesomeIcon 
                className="icons"
                icon={faInstagram} 
                size="xl" 
            />
        </DivStyled>
    )
}


export default FooterIcons;