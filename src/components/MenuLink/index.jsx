import styled from 'styled-components'
import Links from './Links';


const UlStyled = styled.ul`
  display: flex;
  gap: 32px;


  @media (max-width: 768px) {
    display: none;
  }


  li {
    color: hsl(233, 8%, 62%);
    font-weight: 400;
    padding: 0;
    position: relative;
  } 

  li:hover {
    color: hsl(233, 26%, 24%);
    cursor: pointer;
  }

  li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    top: 40px;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, hsla(138, 82%, 69%, 1) 0%, hsla(186, 100%, 50%, 1) 100%);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  li:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  
`;

function MenuLink() {
    return (
        <nav>
            <UlStyled>
                <Links name="Home" path="/"/>
                <Links name="About" path="/about"/>
                <Links name="Contact" path="/contact" />
            </UlStyled>
        </nav>
    )
}


export default MenuLink;