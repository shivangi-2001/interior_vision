import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Menu from '../components/Menu';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import photo9 from '../assets/photo9.jpg'
import '../css/service.css'

const Service = () => {
    const data = [
        { title: 'Interior Design', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Architectural', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Remodeling', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Decor & Art', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Sustainability', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Renovation', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
    ]
    const card = [
        { title: 'Strategy & Planning', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Concept Design', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
        { title: 'Design Realisation', desc: "This is a longer card with supporting text below as a natural p-text-in to additional content.", image: photo9 },
    ]
    return (
        <>
            <Menu name={'Our Service'}  />
            <div className="bg-image" style={{ backgroundImage: `url(${photo9})`, height:'600px' }}>
                <div className="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.5)' }}>
                    <div className="d-flex-flex-column justify-content-center align-items-center p-5 mt-5">
                        <h1 className="display-1" style={{ textAlign: 'center', color: '#f44811' }}>Our Service</h1>
                        <div aria-label="breadcrumb" className='mt-3 text-center d-flex justify-content-center align-items-center'>
                            <ol className="breadcrumb" style={{ color: '' }}>
                                <li className="breadcrumb-item"><a href="/" style={{ color: '#e97b56' }}>Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: '#f6b79a' }}>Service</li>
                            </ol>
                        </div>

                    </div>
                    <img src="/logo1.png" height={80} style={{ boxShadow: 'none' }} className='opacity-70 position-absolute bottom-0 end-0 px-5 mb-2' />
                </div>
            </div>
            
            <section className='service-section mt-0'>
                <div className="container">
                    <h4 style={{ color: '#f44811' }}>What We Do</h4>
                    <h2 className='display-1 my-4 fw-bolder' style={{ color: '#f44811' }}>Our Services</h2>
                    <p className="" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem dolorum consequatur similique illo saepe repellat, atque, ab at debitis vitae esse magnam natus optio repellendus tempore consectetur excepturi rerum.</p>

                    <div className="row g-4 mt-4">
                        {data.map((post, index) => (
                            <div key={index} className="col-sm-12 col-md-4">
                                <div className="card p-3">
                                    <img src={post.image} className="card-img" alt={`Card ${index + 1}`} />
                                    <div className="card-body text-start p-0">
                                        <h3 className="card-title my-3 text-dark">{post.title}</h3>
                                        <p className="card-text">{post.desc}</p>
                                    </div>
                                    <a href="/" style={{ color: '#f44811' }} className='mt-2'>Read more <i class="fas fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='p-5 mb-3'>
                <h4 style={{ color: '#f44811' }}>Our Process</h4>
                <h1 className="display-1 text-dark">How We Works</h1>

                <div className="container">
                    <div className="row g-4 my-4">
                        {card.map((post, index) => (
                            <div key={index} className="col-sm-12 col-md-4">
                                <div className="card p-lg-4 p-xs-2" style={{ backgroundColor: '#fbf2db' }}>
                                    <h1 className="display-4 mb-4 text-dark">{post.title}</h1>
                                    <p className="card-text">{post.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="p-xm-2 p-lg-5" style={{ backgroundColor: 'hsla(0,0%,0%,0.6)'}}>
                
                <h4 className='text-white mt-5'>What they say about Interior Vision</h4>
                <h1 className="display-2 text-center text-white">Testimonals</h1>
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
                    className="testimonals"
                >
                    <SwiperSlide>
                        <div className="d-flex flex-column justify-content-center text-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" alt="" style={{ width: "200px", height: "205px" }}
                                className="rounded-circle mx-auto" />
                            <h3 className="fw-light mx-auto mt-lg-5 m-xs-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis impedit voluptatum, sapiente doloremque atque eius facere non vitae? Eos voluptate, repellendus qui voluptatum sed quisquam. Molestiae ex ratione velit!
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column justify-content-center text-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" alt="" style={{ width: "200px", height: "205px" }}
                                className="rounded-circle mx-auto" />
                            <h3 className="fw-light mx-auto mt-lg-5 m-xs-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis impedit voluptatum, sapiente doloremque atque eius facere non vitae? Eos voluptate, repellendus qui voluptatum sed quisquam. Molestiae ex ratione velit!
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column justify-content-center text-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" alt="" style={{ width: "200px", height: "205px" }}
                                className="rounded-circle mx-auto" />
                            <h3 className="fw-light mx-auto mt-lg-5 m-xs-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis impedit voluptatum, sapiente doloremque atque eius facere non vitae? Eos voluptate, repellendus qui voluptatum sed quisquam. Molestiae ex ratione velit!
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column justify-content-center text-center">
                            <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style={{ width: "200px", height: "205px" }}
                                className="rounded-circle mx-auto" />
                            <h3 className="fw-light mx-auto mt-lg-5 m-xs-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis impedit voluptatum, sapiente doloremque atque eius facere non vitae? Eos voluptate, repellendus qui voluptatum sed quisquam. Molestiae ex ratione velit!
                            </h3>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </section>

            <div className="bg-image thirdSection mb-0 mt-0">
                <div className="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.5)', color:'white' }}>
                    <div className="box">
                        <h1 className="display-2">
                            Let's Design Your Dream Together
                        </h1>
                        <h5 className='my-md-2 lead fw-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit odio doloremque</h5>
                        <button className='button btn btn-lg my-md-5'>
                            Get Started 
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;