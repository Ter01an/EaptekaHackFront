import './ScheduleSetting.scss'
import AppHead from "../../componets/AppHead";
import productList from "../../data/products";
import moment from "moment";
import {useEffect, useState} from "react";

export default function ScheduleSetting() {
    const [products, setProducts] = useState(productList);
    const [item, setItem] = useState(productList[1]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProducts(products.map(p => p))
            setItem(productList[1])
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="ScheduleSetting">
            <AppHead type={'settings'} title={'Настройки'}/>

            <div className="ScheduleSetting__item">
                <div className="ScheduleSetting__media">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="ScheduleSetting__info">
                    <div className="ScheduleSetting__title">
                        {item.title}
                    </div>
                    <div className="ScheduleSetting__time">
                        {item.date.isBefore() ? (
                            <span className="Schedule-item__its-time">Пора принимать </span>
                        ) : (
                            <span>
                                Через {moment.duration(item.date.diff(moment(), 'seconds'), "seconds").format("hh:mm:ss", { trim: false})} / <span className={item.total < 10 ? "red" : ""}>Осталось {item.total} шт</span>
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="ScheduleSetting__rows">
                <div className="ScheduleSetting__row">
                    <div className="ScheduleSetting__name">
                        Название
                    </div>
                    <div className="ScheduleSetting__value">
                        Цетрин
                    </div>
                </div>
                <div className="ScheduleSetting__row">
                    <div className="ScheduleSetting__name">
                        В упаковке
                    </div>
                    <div className="ScheduleSetting__value">
                        30 шт.
                    </div>
                </div>
                <div className="ScheduleSetting__row">
                    <div className="ScheduleSetting__name">
                        Частота приема
                    </div>
                    <div className="ScheduleSetting__value">
                        2 раза в день
                    </div>
                </div>
                <div className="ScheduleSetting__row">
                    <div className="ScheduleSetting__name">
                        Дозировка
                    </div>
                    <div className="ScheduleSetting__value">
                        2 шт.
                    </div>
                </div>
                <div className="ScheduleSetting__row">
                    <div className="ScheduleSetting__name">
                        Время приема
                    </div>
                    <div className="ScheduleSetting__value">
                        {moment(item.date).format("HH:mm")}
                    </div>
                </div>
            </div>
        </div>
    )
}