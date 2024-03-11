import React from 'react'
import '../css/header.css'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img class="navbar-brand" href="/" src="/logo1.png" width="100" height="100%" />
                    <button
                        data-mdb-collapse-init
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item me-3">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item me-3">
                                    <a class="nav-link" href="/about-us">About Us</a>
                                </li>
                                <li class="nav-item me-3">
                                    <a class="nav-link" href="/service">Services</a>
                                </li>
                                
                                <li class="nav-item me-3">
                                    <a class="nav-link" href="/contact-us">Contact Us</a>
                                </li>
                                <li class="nav-item me-3">
                                    <a class="nav-link" href="/faqs">FAQs</a>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;