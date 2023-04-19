import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-custom.css';

import { FC } from '../../util';
import Showcase from './showcase';
import { Projects as ProjectsProps } from '../../hooks/useSiteMetadata';

const Projects: FC<ProjectsProps> = ({ frontEnd, backEnd }) => {
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            slidesPerView={1}
            autoplay={{
                delay: 10000,
                disableOnInteraction: true
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <Showcase title="Front End" projects={frontEnd} />
            </SwiperSlide>
            <SwiperSlide>
                <Showcase title="Back End" projects={backEnd} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Projects;
