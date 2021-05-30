import './ScheduleSearch.scss';
import AppHeadSearch from "../../componets/AppHeadSearch";
import productList from "../../data/products";
import { useState } from "react";
import { Link } from "wouter";
import imgPlus from "./static/icon-plus.svg";
import imgCheck from "./static/icon-check.svg";

export default function ScheduleSearch() {
    const [list, setList] = useState([]);

    function handleAdd(i) {
        setList([...list, i]);
    }

    return (
        <div className="ScheduleSearch">
            <AppHeadSearch />
            <div className="ScheduleSearch__items">
                {productList.map((item, i) => (
                    <div key={i} className="ScheduleSearch-item">
                        <div className="ScheduleSearch-item__media">
                            <img src={item.img} alt={item.title}/>
                        </div>
                        <div className="ScheduleSearch-item__info">
                            <div className="ScheduleSearch-item__title">
                                {item.title}
                            </div>
                            <div className="ScheduleSearch-item__package">
                                {item.package} таблеток
                            </div>
                        </div>
                        <div className="ScheduleSearch-item__buttons">
                            <Link href="/schedule/setting">
                                <div className={"ScheduleSearch-item__button" + (i == 1 ? " ScheduleSearch-item__button--active" : "")}>
                                    {i != 1 ? (
                                        <img src={imgPlus} alt="Добавить"/>
                                    ) : (
                                        <img src={imgCheck} alt="Добавлено"/>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}