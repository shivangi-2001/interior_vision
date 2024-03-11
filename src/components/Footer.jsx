import React from 'react'
import '../css/footer.css'

const Footer = () => {
    return (
        <>
            <footer class="text-center text-md-start">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <img src="/logo1.png" alt="" height={80} className='mb-2' />
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                            <a style={{color: "#fa9474"}} className='mx-2 fw-bold' href="#!" role="button">
                                <i class="fab fa-facebook-f fa-lg"></i>
                            </a>

                            <a style={{color: "#fa9474"}} className='mx-2 fw-bold' href="#!" role="button">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>

                            <a style={{color: "#fa9474"}} className='mx-2 fw-bold' href="#!" role="button">
                                <i class="fab fa-google fa-lg"></i>
                            </a>

                            <a style={{color: "#fa9474"}} className='mx-2 fw-bold' href="#!" role="button">
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>

                        <div class="col-lg-3 col-md-6 my-4 mb-md-0 text-end">
                            <h5 class="text-uppercase" style={{color:'#ffb915'}}>EXPLORE</h5>

                            <ul class="list-unstyled my-2">
                                <li>
                                    <a href="/" class="">Interior Vision</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <a href="/">New Design</a>
                                </li>
                                <li>
                                    <a href="/services">Luxury</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 my-4 mb-md-0 text-end">
                            <h5 class="text-uppercase my-2 " style={{color:'#ffb915'}}>RESOURCES</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="/about-us" >About Us</a>
                                </li>
                                <li>
                                    <a href="/contact-us" >Contact Us</a>
                                </li>
                                <li>
                                    <a href="/faqs" >FAQs</a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-center p-1" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.8)' }}>
                    © 2020 Copyright:
                    <a class="" style={{ color: "#f44811" }} href="/">InteriorVision.com</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;