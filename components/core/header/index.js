import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full border-b border-gray-200">
        <div className="w-full max-w-[1586px] m-auto h-9 flex justify-between items-center">
          <ul className="flex items-center space-x-3">
            <li className="text-[13px] text-[#7E7E7E]">
              <Link href="/about-us">About Us </Link>
            </li>
            <span className="h-[8px] w-[1px] bg-gray-400" />
            <li className="text-[13px] text-[#7E7E7E]">
              <Link href="/my-account">My Account </Link>
            </li>
            <span className="h-[8px] w-[1px] bg-gray-400" />
            <li className="text-[13px] text-[#7E7E7E]">
              <Link href="/wishlist">Wishlist </Link>
            </li>
            <span className="h-[8px] w-[1px] bg-gray-400" />
            <li className="text-[13px] text-[#7E7E7E]">
              <Link href="/order-tracking">Order Tracking </Link>
            </li>
          </ul>

          <div>Trendy 25silver jewelry, save up 35% off today</div>

          <div className="flex items-center space-x-3">
            <div className="text-[13px] text-[#7E7E7E]">
              Need help? Call Us: +
              <span className="text-[#3BB77E]">1800 900</span>
            </div>
            <div className="group relative flex items-center h-9 text-[13px] text-[#7E7E7E] cursor-pointer">
              English <RiArrowDropDownLine />
              <div className="group-hover:block hidden absolute left-0 top-[36px] shadow-md bg-white p-2 border">
                <div>Bangladesh</div>
                <div>Bangladesh</div>
                <div>Bangladesh</div>
              </div>
            </div>
            <div className="group relative flex items-center h-9 text-[13px] text-[#7E7E7E] cursor-pointer">
              USD <RiArrowDropDownLine />
              <div className="group-hover:block hidden absolute left-0 top-[36px] shadow-md bg-white p-2 border">
                <div>BD</div>
                <div>BD</div>
                <div>BD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>middle</div>
      <div>bottom</div>
    </header>
  );
};

export default Header;
