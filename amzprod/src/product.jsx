import './product.css'
import Price from "./price.jsx"
export default function Product(){
    return(
        <div className="Product">
            <h3>Title</h3>
            <h3>Description</h3>
            <Price/>
        </div>
    );
}
