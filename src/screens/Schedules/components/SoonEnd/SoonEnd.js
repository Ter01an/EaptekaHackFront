import productList from "../../../../data/products";
import Product from "../../../../componets/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "./SoonEnd.scss";
import imgArrow from "./static/icon-arrow.svg"

export default function SoonEnd() {
    const list = productList.concat(productList);

    return (
        <div className="SoonEnd">
            <div className="SoonEnd__head">
                <div className="SoonEnd__title">
                    Скоро закончится <span>3</span>
                </div>
                <div className="SoonEnd__link">
                    <img src={imgArrow} alt="Подробнее"/>
                </div>
            </div>
            <div className="SoonEnd__list">
                <Swiper
                    spaceBetween={8}
                    edgeSwipeDetection={true}
                    slidesPerView={'auto'}
                >
                    {list.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Product item={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}