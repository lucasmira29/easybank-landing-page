



function ItemList({ src, alt, title, children }) {
    return (
        <div className="col-xl col-12 col-md-4">
            <img src={src} alt={alt} className="pb-3" draggable="false" />
            <h3 className="py-4 fs-4" >{title}</h3>
            <p className="fs-6 lh-base">{children}</p>            
        </div>
    )
}


export default ItemList;