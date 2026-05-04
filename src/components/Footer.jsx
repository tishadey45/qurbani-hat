import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white p-10">
      <div className="footer sm:footer-horizontal">
        <nav>
          <h6 className="footer-title">Contact Info</h6>

          <p className="flex items-center gap-2">
            <MdEmail className="text-red-500 text-lg" />
            support@qurbanihat.com
          </p>

          <p className="flex items-center gap-2">
            <MdPhone className="text-green-500 text-lg" />
            +880 1234-567890
          </p>

          <p className="flex items-center gap-2">
            <MdLocationOn className="text-blue-500 text-lg" />
            Barishal, Bangladesh
          </p>
        </nav>

        <nav>
          <h6 className="footer-title">Social Links</h6>

          <div className="flex  gap-4 items-center">
            <a className="flex items-center gap-2 link link-hover">
              <FaFacebook className="text-blue-600 text-lg" />
            </a>

            <a className="flex items-center gap-2 link link-hover">
              <FaTwitter className="text-sky-500 text-lg" />
            </a>

            <a className="flex items-center gap-2 link link-hover">
              <FaInstagram className="text-pink-500 text-lg" />
            </a>

            <a className="flex items-center gap-2 link link-hover">
              <FaLinkedin className="text-blue-700 text-lg" />
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">About</h6>
          <p className="max-w-xs">
            QurbaniHat is an online marketplace where you can easily buy and
            sell qurbani animals.
          </p>
        </nav>
      </div>
      <div className="w-full text-center mt-6 border-t border-gray-600 pt-4">
        <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
      </div>
    </footer>
  );
}
