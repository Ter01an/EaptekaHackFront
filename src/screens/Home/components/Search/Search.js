import "./Search.scss"

import imgSearch from "./static/icon-search.svg"
import imgScan from "./static/icon-scan.svg"
import imgAudio from "./static/icon-audio.svg"

export default function Search() {
    return (
        <form className="Search">
            <div className="Search__icon-search">
                <img src={imgSearch} alt="Поиск"/>
            </div>
            <input placeholder="По названию лекарства или болезни" type="text" className="Search__input" />
            <div className="Search__icon-audio">
                <img src={imgAudio} alt="Речь"/>
            </div>
            <div className="Search__icon-scan">
                <img src={imgScan} alt="Сканировать"/>
            </div>
        </form>
    )
}