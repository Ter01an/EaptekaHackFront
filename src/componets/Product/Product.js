import "./Product.scss";
import imgCart from "./static/icon-cart.svg"

export default function Product({ item }) {
    return (
        <div className="Product">
            <div className="Product__media">
                <img src={item.img} alt={item.title}/>
            </div>
            <div className="Product__title">
                {item.title}
            </div>
            <div className="Product__package">
                Таблетки {item.package} шт.
            </div>
            <div className="Product__available">
                В наличии
            </div>
            <div className="Product__footer">
                <div className="Product__price">
                    {item.price}₽
                </div>
                <div className="Product__button">
                    <img src={imgCart} alt="Добавить в корзину"/>
                </div>
            </div>
        </div>
    )
}