import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg">
            <div className=" mb-4">
              <h2 className=" text-warning logo">
                <a
                  href="/home"
                  className="text-warning"
                  style={{ textDecoration: "none" }}
                >
                  Autorepair<span>.</span>
                </a>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="list-unstyled float-md-left float-lft mt-4">
                <li className="list-inline-item">
                  <a
                    href="//facebook.com"
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    <FontAwesomeIcon
                      className="icon active-icon mr-2"
                      icon={faFacebookF}
                    />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="//google.com"
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    <FontAwesomeIcon
                      className="icon mr-2"
                      icon={faGooglePlusG}
                    />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="//instagram.com"
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    <FontAwesomeIcon className="icon mr-2" icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className=" mb-4 ml-md-5">
              <h2 className=" text-warning ">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" className="py-1 d-block text-decoration-none">
                    <span className="fa fa-check mr-3"> </span>
                    Oil Change
                  </a>
                </li>
                <li>
                  <a href="/home" className="py-1 d-block text-decoration-none">
                    <span className="fa fa-check mr-3"></span>Batteries
                  </a>
                </li>
                <li>
                  <a href="/home" className="py-1 d-block text-decoration-none">
                    <span className="fa fa-check mr-3"></span>Tow Truck
                  </a>
                </li>
                <li>
                  <a href="/home" className="py-1 d-block text-decoration-none">
                    <span className="fa fa-check mr-3"></span>Tire Change
                  </a>
                </li>
                <li>
                  <a href="/home" className="py-1 d-block text-decoration-none">
                    <span className="fa fa-check mr-3"></span>Engine Repair
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className=" mb-4">
              <h2 className=" text-warning ">Contact information</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="mr-2" />
                    <span className="text">+2 392 3929 210</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMailBulk} className="mr-2" />
                    <span className="text">info@yourdomain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className=" mb-4">
              <h2 className=" text-warning ">Business Hours</h2>
              <div className="opening-hours">
                <h4>Opening Days:</h4>
                <p className="pl-3">
                  <span>Monday – Friday : 9am to 20 pm</span>
                  <span>Saturday : 9am to 17 pm</span>
                </p>
                <h4>Vacations:</h4>
                <p className="pl-3">
                  <span>All Sunday Days</span>
                  <span>All Official Holidays</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright ©{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
