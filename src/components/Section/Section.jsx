// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

function Section(props) {
    return (
        <section className="home-fruits padding">
            <h2 className="heading-section">{props.heading}</h2>
            <div className="section-slider">
                <p className={`prev prev${props.name}`}> &larr;</p>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    className="mySwiper"
                    spaceBetween={20}
                    // loop={true}
                    navigation={{
                        nextEl: `.next${props.name}`,
                        prevEl: `.prev${props.name}`,
                    }}
                >
                    {props.list.map((item) => {
                        return (
                            <SwiperSlide key={`slider-${item.id}`}>
                                {item}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <p className={`next next${props.name}`}>&rarr;</p>
            </div>
        </section>
    );
}

export default Section;
