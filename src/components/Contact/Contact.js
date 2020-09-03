import React from "react"
import "./Contact.css"
import { Link } from "gatsby"
function Contact() {
  return (
    <div id="contact" className="contact-grid section container">
      <h1 className="works-exp expander">CONTACT</h1>
      <div className="contact-container">
        <h5 className="section-headings highlight">WANT TO WORK TOGATHER?</h5>
        <p>
          I'm always happy to work on/take a look at interesting projects. You
          can ping me a quick mail here or learn more about me with the links
          below.
        </p>
        <form className="contact-form" action="#">
          <input type="text" placeholder="Name" className="form-control" />
          <input type="email" placeholder="Email" className="form-control" />
          <textarea
            name=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="form-control"
          ></textarea>

          <Link to="/" className="btn submit-btn">
            <svg
              id="planeSVG"
              enable-background="new 0 0 496.009 496.009"
              viewBox="0 0 496.009 496.009"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m475.015.815-464 151.617c-13.104 4.282-14.999 22.106-3.073 29.04l175.35 101.963c5.532 3.217 12.446 2.829 17.582-.986l49.292-36.606-36.606 49.292c-3.814 5.137-4.202 12.052-.986 17.583l101.963 175.35c6.942 11.936 24.762 10.02 29.041-3.073l151.617-464c4.067-12.459-7.782-24.234-20.18-20.18zm-150.766 440.297-78.712-135.365 94.913-127.805c4.729-6.37 4.078-15.243-1.532-20.853-5.609-5.61-14.484-6.262-20.853-1.532l-127.805 94.914-135.364-78.713 400.087-130.733zm-156.258-90.468-106.238 106.237c-6.248 6.247-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l106.238-106.237c6.25-6.247 16.381-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627zm-140.349 4.02c-6.249-6.249-6.249-16.379 0-22.627l41.92-41.921c6.248-6.249 16.379-6.249 22.627 0 6.249 6.249 6.249 16.379 0 22.627l-41.92 41.921c-6.247 6.247-16.379 6.248-22.627 0zm178.25 49.154c6.249 6.248 6.249 16.379 0 22.627l-41.921 41.92c-3.124 3.125-7.219 4.687-11.313 4.687-14.127 0-21.421-17.207-11.313-27.314l41.921-41.92c6.247-6.249 16.378-6.249 22.626 0z" />
            </svg>
            Send
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Contact