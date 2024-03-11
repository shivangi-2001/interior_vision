import React from 'react'
import Menu from '../components/Menu';
import photo6 from '../assets/photo6.jpg'
import photo8 from '../assets/photo8.jpg'
import image1 from '../assets/image1.jpg'
import '../css/contact.css'

const Contact = () => {
    return (
        <>
            <Menu name={'Contact Us'} />
            <div className="bg-image" style={{ backgroundImage: `url(${photo6})`, height:'600px', backgroundPosition:'center bottom' }}>
                <div className="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.5)' }}>
                    <div className="d-flex-flex-column justify-content-center align-items-center p-5 mt-5">
                        <h1 className="display-1" style={{ textAlign: 'center', color: '#f44811' }}>Our Contact</h1>
                        <div aria-label="breadcrumb" className='mt-3 text-center d-flex justify-content-center align-items-center'>
                            <ol className="breadcrumb" style={{ color: 'white' }}>
                                <li className="breadcrumb-item"><a href="/" style={{ color: '#e97b56' }}>Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: '#f6b79a' }}>Contact</li>
                            </ol>
                        </div>

                    </div>
                    <img src="/logo1.png" height={80} style={{ boxShadow: 'none' }} className='opacity-70 position-absolute bottom-0 end-0 px-5 mb-2' />
                </div>
            </div>

            <section className="container my-5">
                <div className="d-flex flex-column justify-content-end align-items-end py-5" style={{ color: '#f44811' }}>
                    <h4 style={{ color: '#ffb915' }}>Contact Us</h4>
                    <h1 className="display-1" style={{ letterSpacing: '6px' }}>Our Contact</h1>
                    <h1 className="display-1" style={{ letterSpacing: '6px' }}>Information</h1>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div class="card customCard mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center align-items-center">
                                    <i class="fas fa-map-location-dot" ></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Address</h5>
                                        <p class="card-text text-start">
                                            K,L-234 Pku City Street New Jersey, 203881
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card customCard mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center align-items-center">
                                    <i class="fas fa-earth-africa"></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Website</h5>
                                        <p class="card-text text-start">
                                            <ul className='list-group border-0 list-group-light list-group-small'>
                                                <li className='list-group-item border-0 p-0'>www.InteriorVision.com</li>
                                                <li className='list-group-item p-0'>www.InteriorVision.in</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card customCard mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center align-items-center">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title text-start">Email</h5>
                                        <p class="card-text text-start">
                                            <ul className='list-group border-0 list-group-light list-group-small'>
                                                <li className='list-group-item border-0 p-0'>interiorvisiion.info@gmail.com</li>
                                                <li className='list-group-item p-0'>support.iv@gmail.com</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="container">
                    <div className="d-flex flex-column justify-content-start text-start">
                        <h3>Send Us Message</h3>
                        <h1 className="display-2 fs-bolder mt-3">Talk to Us!</h1>
                    </div>

                    <div class="card mb-3 p-lg-5 p-xs-1 mt-5">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src={photo8}
                                    alt="Trendy Pants and Shoes"
                                    class="img-fluid" style={{ borderRadius: '3rem', height:'100%' }}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body text-start">
                                    <form action="" method="post">
                                        <input type="text" name="full_name"
                                            id="id_full_name" placeholder='Your full name'
                                            className='form-control form-control-lg' />
                                        <input type="email" name="email"
                                            id="id_email" placeholder='Your E-mail'
                                            className='form-control form-control-lg' />
                                        <input type="phone" name="phone"
                                            id="id_phone" placeholder='Your Phone Number'
                                            className='form-control form-control-lg' />
                                        <textarea name="" id="" cols="20" rows="5" className='form-control form-control-lg' placeholder='Write a Message ...'></textarea>
                                        <button className='mt-5 btn btn-lg btn-dark rounded-9'>Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section4'>
                <img src={image1} alt="" height={'100%'} width={'100%'} />
            </section>
        </>
    );
}

export default Contact;