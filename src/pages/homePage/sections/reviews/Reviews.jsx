import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import styles from './reviews.module.css';
import reviewsInfo from './reviewsInfo/reviewsInfo';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
  const RaitingStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
    >
      <path
        d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
        fill="#FFC633"
      />
    </svg>
  );

  const countRating = (item) => {
    const rating = item;
    const allStar = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < allStar; i++) {
      stars.push(<RaitingStar key={stars.length} />);
    }
    return <span>{stars}</span>;
  };

  const SlideCard = ({ name, text, rating }) => (
    <div className={styles.slideBody}>
      <span>{countRating(rating)}</span>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );

  return (
    <article className={styles.container}>
      <div className={styles.bloor}></div>
      <div className={styles.body}>
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className={styles.swiperBlock}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            loop={true}
            breakpoints={{
              320: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
              424: {
                spaceBetween: 20,
                slidesPerView: 1.5,
                centeredSlides: true,
              },
              767: {
                spaceBetween: 20,
                slidesPerView: 2,
                centeredSlides: false,
              },
              1023: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
            }}
            navigation
            autoplay={{
              delay: 4000,
            }}
            speed={3000}
            className={styles.swiperWrapper}
            style={{ overflow: 'visible' }}
          >
            {reviewsInfo.map((item) => (
              <SwiperSlide key={item.id} style={{ display: 'grid' }}>
                <SlideCard
                  name={item.name}
                  text={item.text}
                  rating={item.rating}
                  style={{ display: 'grid' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.bloor}></div>
    </article>
  );
};

export default Reviews;

// {
//   reviewsInfo.map((item) => (
//     <SlideCard key={item.id} name={item.name} text={item.text} />
//   ));
// }
