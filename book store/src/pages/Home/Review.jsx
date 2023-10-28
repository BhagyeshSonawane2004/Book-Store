import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"
import ReviewCard from '../shared/ReviewCard';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            {/* reviews card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>As a self-proclaimed bookworm, this online book store is my haven. The sheer variety of books available is awe-inspiring. I can effortlessly explore every literary realm I desire, from classics to contemporary fiction and everything in between. The website's intuitive search and recommendation features have made it a breeze to discover new titles.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Tejal Patil</h5>
                            <p className='text-sm'> Student,SITS PUNE</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>For a book collector like me, this online book store is a treasure trove. The rare and collectible book section is a dream come true. I've found unique, out-of-print editions that have elevated my collection. The descriptions are thorough, and I've always received books in impeccable condition.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Prerana Patil</h5>
                            <p className='text-sm'> Student,COEP PUNE</p>
                        </div>
                    </div>
                </SwiperSlide>
               <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>As a student juggling textbooks and tight budgets, this online book store has been a lifesaver. The prices are budget-friendly, and I can easily find the required textbooks for my courses. Whether I need new or used books, they've got me covered. </p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Jiya Shankar</h5>
                            <p className='text-sm'> Student,IIT BOMBAY</p>
                        </div>
                    </div>
                </SwiperSlide>
               <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
                            <p className='mb-5'>This online book store is a literary wonderland. It's not just a place to buy books; it's a place to get lost in them. The vast selection, from bestsellers to obscure gems, keeps me coming back. The user-friendly interface and comprehensive book descriptions make book hunting an adventure.</p>
                            <Avatar
                                alt="avatar of Jese"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Shweta Patil</h5>
                            <p className='text-sm'> Student,IIM BANGALORE</p>
                        </div>
                    </div>
                </SwiperSlide>
               
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review
