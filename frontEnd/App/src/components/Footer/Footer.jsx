import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-container fixed-bottom text-white py-4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <p className="mb-0">© 2024 U-Bank!</p>
          </div>
          <div className="col-md-6 text-light">
            <ul className="list-inline mb-0 text-end">
              <li className="list-inline-item"><a href="#"><i className="bi bi-facebook fs-4 text-white">Home</i></a></li>
              <li className="list-inline-item"><a href="#"><i className="bi bi-twitter fs-4 text-white">U-Auto</i></a></li>
              <li className="list-inline-item"><a href="#"><i className="bi bi-instagram fs-4 text-white">U-Connect</i></a></li>
              <li className="list-inline-item"><a href="#"><i className="bi bi-linkedin fs-4 text-white">Contact</i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
