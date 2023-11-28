

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import logo1 from '../../../assets/logo1.jpg'
import logo2 from '../../../assets/logo2.jpg'
import logo3 from '../../../assets/logo3.jpg'
import './Slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>
      
        
        
      </Swiper>
    </>
    );
};

export default Slider;



