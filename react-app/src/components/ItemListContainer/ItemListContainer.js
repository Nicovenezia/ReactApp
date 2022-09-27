import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
    <div className="box-itemlist">
        <h1 className="h1-item">
            {greeting}
        </h1>
    </div>
    )
}

export default ItemListContainer