import React from 'react'
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Superbike</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect Superbike to meet your needs.
              </li>
              <li>
                <a href="tel:9375373844">
                  <IconPhoneCall /> &nbsp; (957) -XXX-XXXX
                </a>
              </li>
              <li>
                <a href="mailto: superbikerental@gmail.com">
                  <IconMail />
                  &nbsp; superbikerental@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Delhi</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How We Work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 7:00PM</li>
              <li>Sat - Sun: 9:00AM - 9:00PM</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer