import React from "react";

const Footer = () => {
  return <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto flex justify-between px-4">
      <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="mt-2">123 Main Street</p>
          <p>New York, NY 10001</p>
          <p className="mt-2">Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
      </div>
      <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Products</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
      </div>
      <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <ul className="mt-2 flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
          </ul>
      </div>
  </div>
  <div className="border-t border-gray-700 mt-8 py-4 text-center">
      &copy; 2024 Your Company. All rights reserved.
  </div>
</footer>
};

export default Footer;
