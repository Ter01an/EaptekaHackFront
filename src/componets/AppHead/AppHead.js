import "./AppHead.scss"
import imgArrow from "./static/icon-arrow.svg"
import imgSettings from "./static/icon-settings.svg"
import imgNotify from "./static/icon-notifications.svg"
import imgScan from "./static/icon-scan.svg"
import imgSearch from "./static/icon-search.svg"
import { Link } from "wouter";

export default function AppHead({ title = '', big = false, type = 'basic' }) {

    function handleBack() {
        window.history.back()
    }

    return (
        <div className={"App-head" + (big ? " App-head--big" : "")}>
            <div className="App-head__back" onClick={handleBack}>
                <img src={imgArrow} alt="Назад"/>
            </div>
            <div className="App-head__title">
                {title}
            </div>
            <div className="App-head__buttons">
                {type == 'basic' ? (
                    <>
                        <div className="App-head__button">
                            <img src={imgNotify} alt="Оповещения"/>
                        </div>
                        <div className="App-head__button">
                            <img src={imgSettings} alt="Настройки"/>
                        </div>
                    </>
                ) : (<></>)}
                {type == 'settings' ? (
                    <>
                        <div className="App-head__button" onClick={handleBack}>
                            Сохранить
                        </div>
                    </>
                ) : (<></>)}
                {type == 'scan' ? (
                    <>
                        <div className="App-head__button">
                            <img src={imgScan} alt="Сканировать"/>
                        </div>
                        <Link href="/schedule/search" className="App-head__button">
                            <img src={imgSearch} alt="Поиск"/>
                        </Link>
                    </>
                ) : (<></>)}
            </div>
        </div>
    )
}