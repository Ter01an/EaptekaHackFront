import { useState, useEffect } from "react";
import moment from "moment";
import "moment-duration-format";
import "./Schedule.scss"
import productList from "../../../../data/products";
import { Link } from "wouter";

import imgCalendar from "./static/icon-calendar.svg";
import imgArrow from "./static/icon-arrow.svg";

export default function Schedule() {
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
        <div className="Schedule">
            <div className="Schedule__head">
                <Link href="/schedule" className="Schedule__title">
                    <img src={imgCalendar} alt="Прием лекарст" />
                    <span>
                        Прием лекарств
                    </span>
                </Link>
                <Link href="/schedule/add" className="Schedule__link">
                    Добавить
                </Link>
            </div>
            <div className="Schedule__items">
                {products.map((item, i) => (
                    <div key={i} className="Schedule-item">
                        <div className="Schedule-item__data">
                            <div className="Schedule-item__media">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="Schedule-item__info">
                                <div className={"Schedule-item__title" + (item.date.isBefore() ? " Schedule-item__title--disable" : "")}>{item.title}</div>
                                <div className="Schedule-item__date">
                                    {item.date.isBefore() ? (
                                        <span className="Schedule-item__its-time">Пора принимать </span>
                                    ) : (
                                        <span>
                                            Через {moment.duration(item.date.diff(moment(), 'seconds'), "seconds").format("hh:mm:ss", { trim: false})} / <span className={item.total < 10 ? "red" : ""}>Осталось {item.total} шт</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                            <Link href={"/schedule/setting"}>
                                <div className="Schedule-item__button">
                                    {item.date.isBefore() ? (
                                        <span className="Schedule-item__apply">Принять</span>
                                    ) : (
                                        <span>
                                        <img src={imgArrow} alt="Подробнее"/>
                                    </span>
                                    )}
                                </div>
                            </Link>
                        </div>
                        <div className="Schedule-item__progress">
                            <span style={{width: item.date.isBefore() ? '100%' : (item.date.seconds() / item.date.diff(moment(), 'seconds') * 100 + 50) + "%" }} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="Schedule__more">
                <Link href="/schedule" className="Schedule__more-link">
                    Еще 4 товара
                    <img src={imgArrow} alt="Подробнее"/>
                </Link>
            </div>
        </div>
    )
}