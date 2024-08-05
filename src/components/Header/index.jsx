import styled from 'styled-components'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import MenuLink from '../MenuLink';
import Button from '../Button';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const HeaderStyled = styled.header`
    display: flex;
    background-color: #fff;
    justify-content: space-around;
    height: 8vh;
    border-bottom:  1px solid #e9e9e9;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1030;


    @media (max-width: 768px) {    
        gap: 3em;
        height: 10vh;
    }

    @media (max-width: 576px) {
        position: absolute;
    }
    
    .buttonStyled {
        @media (max-width: 768px) {
        display: none;
        }
    }

    .icon-menu {
        color: "#2d314d";
        display: none;

        @media (max-width: 768px) {
            display: block;
        }
    }


`

function Header() {




    return (
        <HeaderStyled>
            <Logo cursor="pointer"/>
            <MenuLink />
              
                <Menu 
                    menuButton={
                        <FontAwesomeIcon className='icon-menu' icon={faBars} size='xl' cursor="pointer" />
                    } transition>

                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>


            <Button>
                Request Invite
            </Button>


        </HeaderStyled>
    )
}


export default Header;