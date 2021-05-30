import { useState, useEffect } from "react";
import moment from "moment";
import "moment-duration-format";
import "./ScheduleList.scss"
import productList from "../../../../data/productsShedules";
import { Link } from "wouter";

import imgArrow from "./static/icon-arrow.svg";

export default function ScheduleList() {
    const [products, setProducts] = useState(productList);

    useEffect(() => {
        const interval = setInterval(() => {
            setProducts(products.map(item => item))
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="ScheduleList">
            <div className="ScheduleList__head">
                <div className="ScheduleList__title">
                    Сегодня
                </div>
                <Link href="/schedule/add" className="ScheduleList__link">
                    Добавить
                </Link>
            </div>
            <div className="ScheduleList__items">
                {products.map((item, i) => (
                    <div key={i} className="ScheduleList-item">
                        <div className="ScheduleList-item__data">
                            <div className="ScheduleList-item__media">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="ScheduleList-item__info">
                                <div className={"ScheduleList-item__title" + (item.date.isBefore() ? " ScheduleList-item__title--disable" : "")}>{item.title}</div>
                                <div className="ScheduleList-item__date">
                                    {item.date.isBefore() ? (
                                        <span className="ScheduleList-item__its-time">Пора принимать </span>
                                    ) : (
                                        <span>
                                            Через {moment.duration(item.date.diff(moment(), 'seconds'), "seconds").format("hh:mm:ss", { trim: false})} / <span className={item.total < 10 ? "red" : ""}>Осталось {item.total} шт</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="ScheduleList-item__button">
                                {item.date.isBefore() ? (
                                    <span className="ScheduleList-item__apply">Принять</span>
                                ) : (
                                    <span>
                                        <img src={imgArrow} alt="Подробнее"/>
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="ScheduleList-item__progress">
                            <span style={{width: item.date.isBefore() ? '100%' : (item.date.seconds() / item.date.diff(moment(), 'seconds') * 100 + 50) + "%" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}