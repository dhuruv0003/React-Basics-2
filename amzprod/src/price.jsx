import './product.css'

export default function Price({OldPrice,NewPrice}) {
    return (
        <div className="price">
            <h3 className='old'>{OldPrice}</h3>
            <h3 className='new'>{NewPrice}</h3>
        </div>
    );
}