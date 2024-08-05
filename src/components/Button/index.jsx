import styled from "styled-components";

const ButtonStyled = styled.button`
    color: #fcfcfc;
    background: linear-gradient(90deg, hsla(138, 82%, 69%, 1) 0%, hsla(186, 100%, 50%, 1) 100%);
    height: 40px;
    width: 200px;
    border-radius: 32px;
    border: none;
    font-size: 1rem;
    font-weight: 700;

`


function Button({ children }) {
    return (
        <ButtonStyled className="buttonStyled">
            {children}
        </ButtonStyled>
    )
}


export default Button;