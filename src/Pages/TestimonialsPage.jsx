import React from 'react'
import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

export const TestimonialsPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a Superbike by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(957) -XXX-XXXX</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>  
    </>
  )
}
