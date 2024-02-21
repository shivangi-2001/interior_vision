import React from 'react'
import Slider from '../components/Slider';
import '../css/home.css'

import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import awards from '../assets/awards.png'

const Home = () => {
    return (
        <>
            <Slider />
            <div className="container" style={{ marginTop: '100px' }}>

                <div className="row position-relative" style={{ width: "90%", margin: 'auto' }}>
                    <h5 className='text-start' style={{ color: '#fa9474' }}>About Us</h5>

                    <div className="col-3 position-absolute" style={{ top: '25%' }}>
                        <img src="/logo1.png" alt="" width={'100%'} className='opacity-50' style={{ boxShadow: 'none' }} />
                    </div>
                    <div className="col-12">
                        <h1 className='display-1' style={{ textAlign: 'right', color: '#f44811' }}>
                            We believe in the transformative power of Interior Design
                        </h1>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={photo1} alt="" width={'100%'} height={400} style={{ borderRadius: '0.8rem' }} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="text-md-end text-sm-center mx-auto" style={{ width: '80%' }}>
                            <p className='p-text'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis aperiam commodi itaque dignissimos eum, nam consectetur repellat voluptate, id architecto laboriosam a ipsam maxime. Amet nam quasi est hic nesciunt? Amet nam quasi est hic nesciunt
                            </p>
                        </div>
                        <div className='mt-3'>
                            <a href="/contact-us" className='btn btn-lg button'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='thirdSection'>
            </div>

            <div className="container p-5">
                <h5 className='text-start' style={{ color: '#fa9474' }}>Excellence Team</h5>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-start display-1" style={{ color: '#f4400d' }}>
                            Our Offers
                        </h1>
                        <div id="scrollspy1" class="sticky-top">
                            <ul class="nav flex-column nav-pills menu-sidebar text-start">
                                <li class="nav-item">
                                    <a class="nav-link" href="#example-1">Section 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#example-2">Section 2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#example-3">Section 3</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#example-4">Section 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            data-mdb-scrollspy-init
                            data-mdb-target="#scrollspy1"
                            data-mdb-offset="0"
                            class="scrollspy-example w-80"
                        >
                            <section id="example-1">
                                <h5 className='text-end' style={{ color: '#f9bca4' }}>Offer 1</h5>
                                <p className="offerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio hic iste deserunt debitis iure facere modi nihil, commodi deleniti sunt quae quibusdam fuga fugiat rem eveniet cumque, impedit sint?</p>
                            </section>
                            <section id="example-2">
                                <h5 className='text-end' style={{ color: '#f9bca4' }}>Offer 2</h5>
                                <p className="offerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio hic iste deserunt debitis iure facere modi nihil, commodi deleniti sunt quae quibusdam fuga fugiat rem eveniet cumque, impedit sint?</p>

                            </section>
                            <section id="example-3">
                                <h5 className='text-end' style={{ color: '#f9bca4' }}>Offer 3</h5>
                                <p className="offerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio hic iste deserunt debitis iure facere modi nihil, commodi deleniti sunt quae quibusdam fuga fugiat rem eveniet cumque, impedit sint?</p>

                            </section>
                            <section id="example-4">
                                <h5 className='text-end' style={{ color: '#f9bca4' }}>Offer 4</h5>
                                <p className="offerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio hic iste deserunt debitis iure facere modi nihil, commodi deleniti sunt quae quibusdam fuga fugiat rem eveniet cumque, impedit sint?</p>

                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-5" style={{ marginTop: '70px' }}>
                <h5 className='text-start' style={{ color: '#fa9474' }}>Team's Vision</h5>
                <div className="my-5">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src={photo2} width={'80%'} alt="" style={{ borderRadius: '40px' }} />
                        </div>
                        <div className="col-md-6 text-end">
                            <h1 className=" display-1" style={{ color: '#f4400d' }}>
                                Our Vision
                            </h1>
                            <h5 className='display-6 py-4' style={{ lineHeight: '1.4' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h5>
                        </div>
                    </div>
                    <div className="row py-5 position-relative">
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src={photo3} width={'70%'} height={360} alt="" style={{ borderRadius: '40px' }} />
                        </div>
                        <div className="col-lg-12 d-none d-sm-block text-end position-absolute" style={{ bottom: '30%' }}>
                            <img src={photo4} width={'40%'} height={360} alt="" style={{ borderRadius: '40px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-5" style={{ margin: '8rem auto' }}>
                <div className="w-100 w-sm-50">
                    <h5 style={{ color: '#ffb915' }}>Celebrating Excellence</h5>
                    <h2 className="display-1" style={{color:'#f44811'}}>Awards And Achievements</h2>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum quos sunt dolor vitae? Assumenda facere ullam nemo aspernatur tenetur rerum ipsa cum a ad, minima dolorem eum explicabo earum.</p>

                </div>
                <br />
                <div className="row" style={{margin:'6rem 0rem'}}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'}  style={{boxShadow:'none', margin:'auto'}}alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-6 text-md-start text-sm-center">
                            Excellence in Residential Interior Design
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2024</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr  className='mt-5'/>
                </div>
                <div className="row" style={{margin:'4rem 0rem'}}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'}  style={{boxShadow:'none', margin:'auto'}}alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-6 text-md-start text-sm-center">
                            Best Residential Deisgn
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2023</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr  className='mt-5'/>
                </div>
                <div className="row" style={{margin:'4rem 0rem'}}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'}  style={{boxShadow:'none', margin:'auto'}}alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-6 text-md-start text-sm-center">
                            Most Sustainable Interior Deisgn
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2022</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr  className='mt-5'/>
                </div>
                <div className="row" style={{margin:'4rem 0rem'}}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'}  style={{boxShadow:'none', margin:'auto'}}alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-6 text-md-start text-sm-center">
                            Best Minimalist Design
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2021</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr  className='mt-5'/>
                </div>
                
            </div>

            <div className="bg-image thirdSection mb-0">
                <div className="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.5)', color: 'white' }}>
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

            <div className="last"></div>


        </>
    );
}

export default Home;