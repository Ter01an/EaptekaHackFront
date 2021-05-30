import productList from "../../../../data/products";
import Product from "../../../../componets/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "./Viewed.scss";
import imgArrow from "./static/icon-arrow.svg"

export default function Viewed() {
    const list = productList.concat(productList);

    return (
        <div className="Viewed">
            <div className="Viewed__head">
                <div className="Viewed__title">
                    Ранее смотрели <span>3</span>
                </div>
                <div className="Viewed__link">
                    <img src={imgArrow} alt="Подробнее"/>
                </div>
            </div>
            <div className="Viewed__list">
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