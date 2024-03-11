import React from 'react'
import Menu from '../components/Menu';
import '../css/About.css'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo4 from '../assets/photo4.jpg'
import photo3 from '../assets/photo3.jpg'
import photo10 from '../assets/photo10.jpg'
import photo11 from '../assets/photo11.jpg'
import photo12 from '../assets/photo12.jpg'
import photo13 from '../assets/photo13.jpg'
import awards from '../assets/awards.png'


const AboutUs = () => {
    return (
        <>
            <Menu name={'About Us'} />
            <div className="bg-image" style={{ backgroundImage: `url(${photo5})`, height: '600px', backgroundPosition: 'center bottom' }}>
                <div className="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.7)' }}>
                    <div className="d-flex-flex-column justify-content-center align-items-center p-5">
                        <h1 className='display-2 fw-bold' style={{ color: '#f44811' }}>Step Into the Future Design</h1>
                        <h6 className='display-6 mt-4' style={{ color: '#fff' }}>Sequi reiciendis voluptatem eos dolorem magnam vel quae suscipit rerum quaerat ipsum, cupiditate voluptas!</h6>
                    </div>
                    <img src="/logo1.png" height={80} style={{ boxShadow: 'none' }} className='opacity-50 position-absolute bottom-0 end-0 px-5 mb-2' />
                </div>
            </div>


            <div className="container p-sm-0 p-5 my-5">
                <h1 className='display-2'>Mordern Elegance</h1>
                <hr className='my-3' />
                <h5 className="display-6" style={{ color: '#fa9474' }}>Personalize Decorators</h5>
                <div className="row p-3 mt-5 g-5">
                    <div className="col-md-4">
                        <img style={{ borderRadius: '33px' }} src={photo6} alt="" width={'100%'} height={300} />
                    </div>
                    <div className="col-md-4">
                        <img style={{ borderRadius: '33px' }} src={photo4} alt="" width={'100%'} height={300} />
                    </div>
                    <div className="col-md-4">
                        <img style={{ borderRadius: '33px' }} src={photo3} alt="" width={'100%'} height={300} />
                    </div>
                </div>
            </div>

            <div className="container my-5" style={{ paddingTop: '80px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={photo3} alt="" width={'80%'} height={600} className='rounded-3' />
                    </div>
                    <div className="col-md-6 text-md-end text-sm-center">
                        <h3 className="display-3 fw-bold mb-4" style={{ color: '#f44811' }}>Project Overview</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit enim accusamus iusto, modi quis corrupti tenetur sequi nisi optio quas architecto quasi eaque? Dignissimos laudantium architecto dolorum optio culpa.
                        </p>
                        <ul class="list-group list-group-light mt-5">
                            <li class="list-group-item d-flex justify-content-end align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">John Doe | Project Details</p>
                                        <p class="text-muted mb-0">Lorem ipsum dolor situe tempora reprehenderit deleniti! - john.doe@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-end align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">John Doe | Project Details</p>
                                        <p class="text-muted mb-0">Lorem ipsum dolor situe tempora reprehenderit deleniti! - john.doe@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-end align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">John Doe | Project Details</p>
                                        <p class="text-muted mb-0">Lorem ipsum dolor situe tempora reprehenderit deleniti! - john.doe@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '10rem' }}>
                <h5 className=" text-center fw-bold" style={{ color: '#fa9474' }}>
                    What Sets Us Apart
                </h5>
                <h3 className="display-1 text-center" style={{ color: '#f44811' }}>
                    Why Choose Us
                </h3>
                <div className="row mt-5 g-5">
                    <div className="col-lg-8">
                        <div className="row g-5 mb-5">
                            <div className="col" style={{ position: 'relative' }}>
                                <div className="card p-3 rounded-9" style={{ backgroundColor: '#fbf2db' }}>
                                    <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quas aut dolor assumenda. Magni perferendis, eligendi non blanditiis rem laboriosam vitae iste dignissimos similique nobis iusto nihil libero a et?</p>
                                    <h4 className='display-5 text-start' style={{ zIndex: '100' }}>Creative Excellence</h4>
                                    <h1 className="mb-0" style={{ position: 'absolute', bottom: '0', right: '0', color: 'White', fontSize: '10rem', zIndex: 0 }}>01</h1>
                                </div>
                            </div>
                            <div className="col" style={{ position: 'relative' }}>
                                <div className="card p-3 rounded-9" style={{ backgroundColor: '#f8d4b1' }}>
                                    <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quas aut dolor assumenda. Magni perferendis, eligendi non blanditiis rem laboriosam vitae iste dignissimos similique nobis iusto nihil libero a et?</p>
                                    <h4 className='display-5 text-start mb-0' style={{ zIndex: '100' }}>Client -</h4>
                                    <h4 className="display-5 text-start" style={{ zIndex: '100' }}>Centric</h4>
                                    <h1 className="mb-0" style={{ position: 'absolute', bottom: '0', right: '0', color: 'White', fontSize: '10rem', zIndex: 0 }}>02</h1>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ position: 'relative' }}>
                                <div className="card p-3 rounded-9" style={{ backgroundColor: '#f7e7c1' }}>
                                    <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quas aut dolor assumenda. Magni perferendis, eligendi non blanditiis rem laboriosam vitae iste dignissimos similique nobis iusto nihil libero a et?</p>
                                    <h4 className='display-5 text-start' style={{ zIndex: '100' }}>Sustainable Innovation</h4>
                                    <h1 className="mb-0" style={{ position: 'absolute', bottom: '0', right: '0', color: 'White', fontSize: '10rem', zIndex: 0 }}>03</h1>

                                </div>
                            </div>
                            <div className="col" style={{ position: 'relative' }}>
                                <div className="card p-3 rounded-9" style={{ backgroundColor: '#ecd2c6' }}>
                                    <p className='text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quas aut dolor assumenda. Magni perferendis, eligendi non blanditiis rem laboriosam vitae iste dignissimos similique nobis iusto nihil libero a et?</p>
                                    <h4 className='display-5 text-start ' style={{ zIndex: '100' }} >Attention to Details</h4>
                                    <h1 className="mb-0" style={{ position: 'absolute', bottom: '0', right: '0', color: 'White', fontSize: '10rem', zIndex: 0 }}>04</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src={photo13} alt="" width={'100%'} />
                    </div>
                </div>

            </div>

            <div className="container" style={{ margin: '8.8rem auto' }}>
                <h5 className='text-start' style={{ color: '#fa9474' }}>Team's Interior</h5>
                <h3 className="display-1 text-start fw-bold" style={{ color: '#fa9474' }}>
                    Meet Our
                </h3>
                <h3 className="display-2 text-start fw-bold" style={{ color: '#f44811' }}>
                    Design Maestros
                </h3>

                <div className="row mt-5 g-3">
                    <div className="col-md-4">
                        <div class="card p-3" style={{ backgroundColor: '#ecd2c6' }}>
                            <img src={photo10} class="card-img-top rounded-9" alt="Fissure in Sandstone" />
                            <div class="card-body py-3 px-0 text-start">
                                <h5 class="card-title display-5 text-start">Interior Deisgn</h5>
                                <h5 className="lead fw-bold mb-4">Top Design</h5>
                                <a class="btn text-white btn-floating me-2" data-mdb-ripple-init style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                                    <i class="fab fa-twitter"></i>
                                </a>

                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
                                    <i class="fab fa-google"></i>
                                </a>

                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card p-3" style={{ backgroundColor: '#ecd2c6' }}>
                            <img src={photo11} class="card-img-top rounded-9" alt="Fissure in Sandstone" />
                            <div class="card-body py-3 px-0 text-start">
                                <h5 class="card-title display-5 text-start">Luxury Dreams</h5>
                                <h5 className="lead fw-bold mb-4">Top Design</h5>
                                <a class="btn text-white btn-floating me-2" data-mdb-ripple-init style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                                    <i class="fab fa-twitter"></i>
                                </a>

                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
                                    <i class="fab fa-google"></i>
                                </a>

                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card p-3" style={{ backgroundColor: '#ecd2c6' }}>
                            <img src={photo12} class="card-img-top rounded-9" alt="Fissure in Sandstone" />
                            <div class="card-body py-3 px-0 text-start">
                                <h5 class="card-title display-5 text-start"> Architectural</h5>
                                <h5 className="lead fw-bold mb-4">Top Design</h5>
                                <a class="btn text-white btn-floating me-2" data-mdb-ripple-init style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                                    <i class="fab fa-twitter"></i>
                                </a>

                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
                                    <i class="fab fa-google"></i>
                                </a>

                                <a class="btn text-white btn-floating mx-2" data-mdb-ripple-init style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ margin: '8rem auto' }}>
                <div className="w-100 w-sm-50">
                    <h5 style={{ color: '#ffb915' }}>Celebrating Excellence</h5>
                    <h2 className=" text-sm-start text-md-center" style={{ color: '#f44811' }}>Awards And Achievements</h2>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illum quos sunt dolor vitae? Assumenda facere ullam nemo aspernatur tenetur rerum ipsa cum a ad, minima dolorem eum explicabo earum.</p>

                </div>
                <div className="row" style={{ margin: '6rem 0rem' }}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'} style={{ boxShadow: 'none', margin: 'auto' }} alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-5 text-start">
                            Excellence in Residential Interior Design
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2024</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr className='mt-5' />
                </div>
                <div className="row" style={{ margin: '4rem 0rem' }}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'} style={{ boxShadow: 'none', margin: 'auto' }} alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-5 text-start">
                            Best Residential Deisgn
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2023</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr className='mt-5' />
                </div>
                <div className="row" style={{ margin: '4rem 0rem' }}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'} style={{ boxShadow: 'none', margin: 'auto' }} alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-5 text-start">
                            Most Sustainable Interior Deisgn
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2022</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr className='mt-5' />
                </div>
                <div className="row" style={{ margin: '4rem 0rem' }}>
                    <div className="col-md-3">
                        <img src={awards} height={'120px'} style={{ boxShadow: 'none', margin: 'auto' }} alt="" />
                    </div>
                    <div className="col-md-3 p-0">
                        <h3 className="display-5 text-start">
                            Best Minimalist Design
                        </h3>
                    </div>
                    <div className="col-md-6 text-start px-5">
                        <h5>2021</h5>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut facilis totam recusandae atque. Cumque amet fugiat modi, necessitatibus quidem, molestiae adipisci ipsam sint consectetur vero quos nisi architecto libero?</p>
                    </div>
                    <hr className='mt-5' />
                </div>

            </div>

        </>
    );
}

export default AboutUs;