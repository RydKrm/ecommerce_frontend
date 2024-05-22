import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 my-10 text-h5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="-mt-10">
          <div className="flex items-center">
            <Image
              className="w-32 h-32"
              src="/logo.svg"
              alt="Nest Logo"
              width={50}
              height={50}
            />
          </div>
          <p className="mb-2">Awesome grocery store </p>
          <p className="flex items-center mb-2">
            <span className="material-icons mr-2">location_on</span>
            5171 W Campbell
          </p>
          <p className="flex items-center mb-2">
            <span className="material-icons mr-2">call</span>
            (+91) - 540-025-124553
          </p>
          <p className="flex items-center mb-2">
            <span className="material-icons mr-2">email</span>
            sale@Nest.com
          </p>
          <p className="flex items-center">Hours:10:00-18:00,Mon-Sat</p>
        </div>
        <div className="text-small">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <Link href="#">About Us</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Delivery Information</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Support Center</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-small">Account</h2>
          <ul className="text-small">
            <li className="mb-2">
              <Link href="#">Sign In</Link>
            </li>
            <li className="mb-2">
              <Link href="#">View Cart</Link>
            </li>
            <li className="mb-2">
              <Link href="#">My Wishlist</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Track My Order</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Help Ticket</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Shipping Details</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Compare products</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-small">Corporate</h2>
          <ul className="text-small">
            <li className="mb-2">
              <Link href="#">Become a Vendor</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Affiliate Program</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Farm Business</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Farm Careers</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Our Suppliers</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Accessibility</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Promotions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-small">Popular</h2>
          <ul className="text-small">
            <li className="mb-2">
              <Link href="#">Milk & Flavoured Milk</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Butter and Margarine</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Eggs Substitutes</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Marmalades</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Sour Cream and Dips</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Tea & Kombucha</Link>
            </li>
            <li className="mb-2">
              <Link href="#">Cheese</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
