import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Visual = () => {
  useEffect(() => {
    // splideセットアップ
    new Splide('.splide', {
      pauseOnHover: false,
      type: 'loop',
      pagination: true,
      arrows: true,
      autoplay: true,
      interval: 8000,
      perPage: 1,
      gap: '4.0rem',
      focus: "center",
    }).mount();
  });

  return (
    <div className="py-[2.8rem]">
      <div className="splide overflow-hidden">
        <div className="max-w-[1040px] mx-auto">
          <div className="splide__track !overflow-visible">
            <ul className="splide__list">
              <li className="splide__slide">
                <img src="https://via.placeholder.com/1920x1080" alt="Slide 1" />
              </li>
              <li className="splide__slide">
                <img src="https://via.placeholder.com/1920x1080" alt="Slide 2" />
              </li>
              <li className="splide__slide">
                <img src="https://via.placeholder.com/1920x1080" alt="Slide 3" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visual;
