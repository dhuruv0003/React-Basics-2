import './product.css'
import Price from "./price.jsx"
export default function Product({title,idx}){
    let OldPrice=["2000","12000","3000","900"];
    let NewPrice=["1800","10000","2000","600"];
    let description=[[],[],[],[]]
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h3>Description</h3>
            <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]}/>
        </div>
    );
}

