import "./AppHeadSearch.scss"
import imgArrow from "./static/icon-arrow.svg"
import imgSearch from "./static/icon-search.svg";
import imgAudio from "./static/icon-audio.svg";
import imgScan from "./static/icon-scan.svg";

export default function AppHeadSearch() {

    function handleBack() {
        window.history.back()
    }

    return (
        <div className="App-head-search">
            <div className="App-head-search__back" onClick={handleBack}>
                <img src={imgArrow} alt="Назад"/>
            </div>
            <form className="App-head-search__form">
                <div className="App-head-search__icon-search">
                    <img src={imgSearch} alt="Поиск"/>
                </div>
                <input placeholder="Введите название" type="text" className="App-head-search__input" />
                <div className="App-head-search__icon-audio">
                    <img src={imgAudio} alt="Речь"/>
                </div>
                <div className="App-head-search__icon-scan">
                    <img src={imgScan} alt="Сканировать"/>
                </div>
            </form>
        </div>
    )
}