import "./ProductSchedule.scss";
import imgPlus from "./static/icon-plus.svg"
import { Link } from "wouter";

export default function ProductSchedule({ item }) {
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
            <div className="Product__schedule">
                Принимать по 1 шт. 2 раза в день
            </div>
            <div className="Product__footer">
                <div className="Product__inlist">
                    В список
                </div>
                <Link href={"/schedule/setting"} >
                    <div className="Product__button">
                        <img src={imgPlus} alt="Добавить лекарство"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}