import "./Menu.scss";
import { Link } from "wouter";

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
                <div className="Menu__icon"/>
                <div className="Menu__title">
                    Главная
                </div>
            </Link>
            <Link href="/" className="Menu__item" onClick={handleChatClose}>
                <div className="Menu__icon"/>
                <div className="Menu__title">
                    Label
                </div>
            </Link>
            <div className="Menu__item" id="justwidget--asst-button" onClick={handleChatOpen}>
                <div className="Menu__icon"/>
                <div className="Menu__title">
                    Ассистент
                </div>
            </div>
            <Link href="/" className="Menu__item" onClick={handleChatClose}>
                <div className="Menu__icon"/>
                <div className="Menu__title">
                    Label
                </div>
            </Link>
            <Link href="/" className="Menu__item" onClick={handleChatClose}>
                <div className="Menu__icon"/>
                <div className="Menu__title">
                    Label
                </div>
            </Link>
        </div>
    )
}