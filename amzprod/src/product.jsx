import './product.css'
import Price from "./price.jsx"
export default function Product({title,idx}){
    let OldPrice=["2000","12000","3000","900"];
    let NewPrice=["1800","10000","2000","600"];
    let description=[["8000dpi ","5 programmable buttons"],["intutive surface","designed for ipad surface"],["designes for ipad surface"],["wireless","optical orientation"]]
   
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h3>{description[idx][0]}</h3>
            <h3>{description[idx][1]}</h3>
            <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]}/>
        </div>
    );
}

