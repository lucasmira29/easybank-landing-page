import styled from "styled-components";

const ArticleStyled = styled.article`
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 450px;
    border-radius: 5px;
    max-width: 300px;
    box-sizing: border-box;
    padding-bottom: 3em;

    
    @media (max-width: 1294px) {
        padding-bottom: 10em;
    }
    
    @media (max-width: 1199px) {
        padding-bottom: 0;
    }

    img {
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: 50%;
    }

    div {
        height: 50%;
    }

    .author-reference {
        color: hsl(233, 8%, 62%);
        font-weight: 400;
        font-size: 0.9rem;
        padding: 2em 0 1em 0;
    }

    h4:hover {
        color: #27E1C1;
        cursor: pointer;
    }
    
    p {
        color:  hsl(233, 8%, 62%);
    }

`





function ItemCard({ src, alt, author, title, text }) {
    return (
        <ArticleStyled>
            <img src={src} alt={alt} draggable="false"/>
            <div className="mx-4">
                <p className="author-reference">By {author}</p>
                <h4 className="fs-5 pb-3">{title}</h4>
                <p className="fs-6">{text}</p>
            </div>
        </ArticleStyled>
    )
}


export default ItemCard;