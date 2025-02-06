import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-800 text-white p-8 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-3">About This Blog</h2>
          <p className="text-gray-300 mb-4">
            Stay updated with the latest insights, tutorials, and discussions on web development and technology.
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Learn More
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Blog</h2>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MyWebsite. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter profile"
              className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
