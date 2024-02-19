import React from 'react'
import Menu from '../components/Menu';
import photo6 from '../assets/photo2.jpg'
import photo8 from '../assets/photo8.jpg'
import image1 from '../assets/image1.jpg'
import '../css/faq.css'
import Header from '../components/Header';


const FAQs = () => {
    return (
        <>
            <Menu name={'FAQs'} />
            <div className="bg-image" style={{ backgroundImage: `url(${photo6})`, height:'600px', backgroundPosition:'center' }}>
                <div className="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.5)' }}>
                    <div className="d-flex-flex-column justify-content-center align-items-center p-5 mt-5">
                        <h1 className="display-1" style={{ textAlign: 'center', color: '#f44811' }}>FAQs</h1>
                        <div aria-label="breadcrumb" className='mt-3 text-center d-flex justify-content-center align-items-center'>
                            <ol className="breadcrumb" style={{ color: '' }}>
                                <li className="breadcrumb-item"><a href="/" style={{ color: '#e97b56' }}>Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page" style={{ color: '#f6b79a' }}>FAQs</li>
                            </ol>
                        </div>

                    </div>
                    <img src="/logo1.png" height={80} style={{ boxShadow: 'none' }} className='opacity-70 position-absolute bottom-0 end-0 px-5 mb-2' />
                </div>
            </div>

            <section className='p-5'>
                <h3 className="display-5 text-center mb-3">About Projects</h3>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="true" aria-controls="flush-collapseOne">
                                            How long it takes to design a house?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit vitae, vel rem omnis, ab voluptatem facere excepturi velit consectetur, est dolorem quibusdam placeat neque unde illo totam facilis. Explicabo.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How much does it cost to decorate the bedroom?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium earum blanditiis deleniti ullam ducimus, possimus aliquam animi doloremque repudiandae suscipit, nobis id enim, quaerat nam. Debitis ab officia ea vel.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree3" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Is there is revision limit for each project?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree3" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree4" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Do you accept collaborative projects?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree4" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How long it takes to design a house?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit vitae, vel rem omnis, ab voluptatem facere excepturi velit consectetur, est dolorem quibusdam placeat neque unde illo totam facilis. Explicabo.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How much does it cost to decorate the bedroom?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium earum blanditiis deleniti ullam ducimus, possimus aliquam animi doloremque repudiandae suscipit, nobis id enim, quaerat nam. Debitis ab officia ea vel.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Is there is revision limit for each project?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree40">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree40" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Do you accept collaborative projects?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree40" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <hr  className='w-80 container'/>

            <section className='p-5'>
                <h3 className="display-5 text-center mb-3">About Payments</h3>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="true" aria-controls="flush-collapseOne">
                                            How many architect work in your office?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit vitae, vel rem omnis, ab voluptatem facere excepturi velit consectetur, est dolorem quibusdam placeat neque unde illo totam facilis. Explicabo.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How much does it cost to decorate the bedroom?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium earum blanditiis deleniti ullam ducimus, possimus aliquam animi doloremque repudiandae suscipit, nobis id enim, quaerat nam. Debitis ab officia ea vel.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree3" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Is there is revision limit for each project?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree3" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree4" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Do you accept collaborative projects?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree4" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            How long it takes to design a house?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit vitae, vel rem omnis, ab voluptatem facere excepturi velit consectetur, est dolorem quibusdam placeat neque unde illo totam facilis. Explicabo.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How much does it cost to decorate the bedroom?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium earum blanditiis deleniti ullam ducimus, possimus aliquam animi doloremque repudiandae suscipit, nobis id enim, quaerat nam. Debitis ab officia ea vel.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Is there is revision limit for each project?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree40">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree40" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Do you accept collaborative projects?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree40" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odio quidem exercitationem, amet numquam consectetur voluptatibus repellat expedita ab nobis consequatur rem voluptatum minima sapiente maxime libero quasi vitae cupiditate.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div className="bg-image thirdSection mb-0">
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

export default FAQs;