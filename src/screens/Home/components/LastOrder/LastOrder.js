import "./LastOrder.scss"
import imgPlus from "./static/icon-plus.svg"
import productList from "../../../../data/products";

export default function LastOrder() {
    return (
        <div className="LastOrder">
            <div className="LastOrder__info">
                <div className="LastOrder__title">
                    Ваш прошлый заказ
                </div>
                <div className="LastOrder__subtitle">
                    Добавить в корзину?
                </div>
            </div>
            <div className="LastOrder__items">
                {productList.map((item, i) => (
                    <div key={i} className="LastOrder-item">
                        <img src={item.img} alt={item.title}/>
                    </div>
                ))}
            </div>
            <div className="LastOrder__buttons">
                <div className="LastOrder__button">
                    <img src={imgPlus} alt="Добавить"/>
                </div>
            </div>
        </div>
    )
}