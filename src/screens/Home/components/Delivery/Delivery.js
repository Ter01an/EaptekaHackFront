import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "./Delivery.scss"

export default function Delivery() {
    return (
        <div className="Delivery">
            <Swiper
                spaceBetween={8}
                edgeSwipeDetection={true}
                slidesPerView={'auto'}
            >
                <SwiperSlide>
                    <div className="Delivery-item">
                        <div className="Delivery-item__title">
                            Ближайшая доставка
                        </div>
                        <div className="Delivery-item__count">
                            5 товаров
                        </div>
                        <div className="Delivery-item__time">
                            c 10:00 -12:00
                        </div>
                        <div className="Delivery-item__date">
                            30 мая
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Delivery-item Delivery-item--pickup">
                        <div className="Delivery-item__title">
                            Забрать из аптеки
                        </div>
                        <div className="Delivery-item__count">
                            5 товаров
                        </div>
                        <div className="Delivery-item__time">
                            Леника 63/2
                        </div>
                        <div className="Delivery-item__date">
                            до 30 мая
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}