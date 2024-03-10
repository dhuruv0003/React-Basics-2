import './product.css'

export default function Price({OldPrice,NewPrice}) {
    return (
        <div className="price">
            <h3>{OldPrice}</h3>
            <h3>{NewPrice}</h3>
        </div>
    );
}