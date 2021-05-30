import './LastList.scss'
import ProductSchedule from "../../../../componets/ProductSchedule";
import productList from "../../../../data/products";

export default function LastList() {
    const temp = productList.concat(productList)

    return (
        <div className="LastList">
            <div className="LastList__title">
                Недавно купили
            </div>
            <div className="LastList__items">
                {temp.map((item, i) => (
                    <ProductSchedule key={i} item={item}/>
                ))}
            </div>
        </div>
    )
}