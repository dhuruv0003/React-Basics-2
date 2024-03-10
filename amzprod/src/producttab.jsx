import Product from "./product";
import './productTab.css'


export default function ProductTab(){
 
    return(
        <div className="ProductTab">
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil" idx={1}/>
            <Product title="Zebronics zeb transformer" idx={2}/>
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
        
    )
}