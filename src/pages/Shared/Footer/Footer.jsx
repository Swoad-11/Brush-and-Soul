import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"; // ✅ import the icon
import logo from "../../../assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img
            src={logo}
            alt="Brush & Soul"
            className="w-24 md:w-32 h-auto object-contain"
          />
          <p className="text-lg">
            Online Art Seller In Bangladesh With Home Delivery
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Order Tracking</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms Of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Return And Refund</a>
        </nav>
        <nav>
          <h6 className="footer-title">Address</h6>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            {"  "} brush-n-soulinfo@gmail.com
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> +880123456789
          </p>
        </nav>
      </footer>
      <div className="text-center bg-base-300 text-base-content p-4">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="font-semibold">Brush & Soul</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
