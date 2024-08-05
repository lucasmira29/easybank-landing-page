import ItemCard from "./ItemCard";
import cardsContent from "@/json/articles.json"



function Cards() {
    return (
        <div className="row">
        {
            cardsContent.map((card) => {
                return (
                    <div key={card.id} className="d-flex justify-content-md-start justify-content-center col-xl-3 col-md-6 mb-4">
                        <ItemCard 
                            src={card.src}
                            text={card.text}
                            alt={card.alt}
                            author={card.author}
                            title={card.title}
                        />
                    </div>
                )
            })
        }
    </div>
    )
}


export default Cards;