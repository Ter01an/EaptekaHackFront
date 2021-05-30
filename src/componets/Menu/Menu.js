import "./Menu.scss";
import { Link } from "wouter";

import imgCart from "./static/icon-cart.svg";
import imgCatalog from "./static/icon-catalog.svg";
import imgHome from "./static/icon-home.svg";
import imgSber from "./static/icon-sber.png";
import imgUser from "./static/icon-user.svg";

export default function Menu() {

    function handleChatOpen() {
        window.justWidgetApi.open();
    }

    function handleChatClose() {
        window.justWidgetApi.close()
    }

    return (
        <div className="Menu">
            <Link href="/" className="Menu__item" id="justwidget--asst-close" onClick={handleChatClose}>
                <div className="Menu__icon">
                    <img src={imgHome} alt="Главный"/>
                </div>
                <div className="Menu__title">
                    Главная
                </div>
            </Link>
            <Link href="/" className="Menu__item" onClick={handleChatClose}>
                <div className="Menu__icon">
                    <img src={imgCatalog} alt="Каталог"/>
                </div>
                <div className="Menu__title">
                    Каталог
                </div>
            </Link>
            <div className="Menu__item" id="justwidget--asst-button" onClick={handleChatOpen}>
                <div className="Menu__icon Menu__icon--sber">
                    <img src={imgSber} alt="Ассистент"/>
                </div>
            </div>
            <Link href="/" className="Menu__item" onClick={handleChatClose}>
                <div className="Menu__icon">
                    <img src={imgCart} alt="Корзина"/>
                </div>
                <div className="Menu__title">
                    Корзина
                </div>
            </Link>
            <Link href="/" className="Menu__item" onClick={handleChatClose}>
                <div className="Menu__icon">
                    <img src={imgUser} alt="Профиль"/>
                </div>
                <div className="Menu__title">
                    Профиль
                </div>
            </Link>
        </div>
    )
}