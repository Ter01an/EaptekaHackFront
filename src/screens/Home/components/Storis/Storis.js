import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Storis.scss';

// Demo images
import imgStoris1 from "./static/storis-1.jpg";
import imgStoris2 from "./static/storis-2.jpg";
import imgStoris3 from "./static/storis-3.jpg";
import imgStoris4 from "./static/storis-4.jpg";
import imgStoris5 from "./static/storis-5.jpg";

export default function Storis() {
    return (
        <div className="Storis">
            <Swiper
                spaceBetween={4}
                edgeSwipeDetection={true}
                slidesPerView={'auto'}
            >
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris1} alt="Тополиный пух, жара ..."/>
                        <div className="Storis-item__title">Тополиный пух, жара ...</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris2} alt="Скидка 30% на памперсы"/>
                        <div className="Storis-item__title">Скидка 30% на памперсы</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris3} alt="Клещ готов кусать"/>
                        <div className="Storis-item__title">Клещ готов кусать</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris4} alt="Защита от COVID-19"/>
                        <div className="Storis-item__title">Защита от COVID-19</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris5} alt="Помоги близким"/>
                        <div className="Storis-item__title">Помоги близким</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris1} alt="Тополиный пух, жара ..."/>
                        <div className="Storis-item__title">Тополиный пух, жара ...</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris2} alt="Скидка 30% на памперсы"/>
                        <div className="Storis-item__title">Скидка 30% на памперсы</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris3} alt="Клещ готов кусать"/>
                        <div className="Storis-item__title">Клещ готов кусать</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris4} alt="Защита от COVID-19"/>
                        <div className="Storis-item__title">Защита от COVID-19</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Storis-item">
                        <img src={imgStoris5} alt="Помоги близким"/>
                        <div className="Storis-item__title">Помоги близким</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}