'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Digital Dreams</h3>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-gray-400">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-gray-400">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" legacyBehavior>
                  <a className="hover:text-gray-400">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-gray-400">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" legacyBehavior>
                  <a className="hover:text-gray-400">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/support" legacyBehavior>
                  <a className="hover:text-gray-400">Support</a>
                </Link>
              </li>
              <li>
                <Link href="/terms" legacyBehavior>
                  <a className="hover:text-gray-400">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy" legacyBehavior>
                  <a className="hover:text-gray-400">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;