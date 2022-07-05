import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BsGrid, BsPerson } from 'react-icons/bs';
import { ImHeadphones } from 'react-icons/im';
import { IoLocationOutline, IoSync } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import AppLink from '../../common/AppLink';
import Badge from '../../common/Badge';

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
              <div className="group-hover:block absolute hidden left-0 top-[36px] shadow-md bg-white p-2 border">
                <div>Bangladesh</div>
                <div>Bangladesh</div>
                <div>Bangladesh</div>
              </div>
            </div>
            <div className="group relative flex items-center h-9 text-[13px] text-[#7E7E7E] cursor-pointer">
              USD <RiArrowDropDownLine />
              <div className="group-hover:block absolute hidden left-0 top-[36px] shadow-md bg-white p-2 border">
                <div>BD</div>
                <div>BD</div>
                <div>BD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* header middle part */}
      <div className="w-full border-b border-gray-200 py-3">
        <div className="w-full max-w-[1586px] m-auto flex items-center">
          <div className="mr-10">
            <Image
              width={200}
              height={100}
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
            />
          </div>

          {/* search container */}
          <div className="w-full max-w-[700px] h-[54px] flex items-center border-2 border-[#BCE3C9] rounded-md px-3">
            <button className="flex min-w-[135px] max-w-[150px] items-center space-x-2 cursor-pointer hover:text-gray-600 duration-150 font-medium">
              All Categories <RiArrowDropDownLine className="w-5 h-5 ml-3" />
            </button>
            <span className="h-[25px] w-[1px] bg-gray-400 mr-3" />
            <input
              type="text"
              className="w-full h-full outline-none border-none"
              placeholder="Search For Items"
            />
            <AiOutlineSearch className="w-7 h-7 cursor-pointer text-gray-500" />
          </div>

          {/* you location */}
          <div
            className="flex items-center space-x-2 min-w-[173px] px-2 cursor-pointer duration-200
            py-[8px] bg-white shadow-2xl border rounded-md ml-10 hover:-translate-y-2"
          >
            <IoLocationOutline className="text-gray-500" />
            <span className="text-base font-light text-green-600 shad">
              Your Location
            </span>
            <RiArrowDropDownLine className="text-gray-500 w-6 h-6" />
          </div>

          {/* links */}
          <div className="flex items-center space-x-3 ml-10">
            <AppLink href="/hi" className="flex space-x-1">
              <Badge
                count={10}
                badgeTopStyle="-top-[6px]"
                badgeRightStyle="-right-[6px]"
              >
                <IoSync className="w-8 h-8 text-gray-600" />
              </Badge>
              <span className="text-gray-500 self-end">Compare</span>
            </AppLink>

            <AppLink href="/hi" className="flex space-x-1">
              <Badge
                count={10}
                badgeTopStyle="-top-[6px]"
                badgeRightStyle="-right-[6px]"
              >
                <AiOutlineHeart className="w-8 h-8 text-gray-600" />
              </Badge>
              <span className="text-gray-500 self-end">Wishlist</span>
            </AppLink>

            <AppLink href="/hi" className="flex space-x-1">
              <Badge
                count={10}
                badgeTopStyle="-top-[6px]"
                badgeRightStyle="-right-[6px]"
              >
                <AiOutlineShoppingCart className="w-8 h-8 text-gray-600" />
              </Badge>
              <span className="text-gray-500 self-end">Cart</span>
            </AppLink>

            <AppLink href="/hi" className="flex space-x-1">
              <Badge
                count={10}
                badgeTopStyle="-top-[6px]"
                badgeRightStyle="-right-[6px]"
              >
                <BsPerson className="w-8 h-8 text-gray-600" />
              </Badge>
              <span className="text-gray-500 self-end">Account</span>
            </AppLink>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between h-20 items-center border-b border-gray-200">
        <div className="flex h-full items-center">
          <button className="flex items-center space-x-2 bg-[#3BB77E] rounded text-white outline-none hover:bg-[#18784b] duration-150 px-2 py-2">
            {' '}
            <BsGrid className="mr-2 w-6 h-6" /> Browse All Categories{' '}
            <RiArrowDropDownLine className="w-6 h-6" />{' '}
          </button>

          <ul className="flex space-x-3 ml-3">
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              {' '}
              <AiOutlineFire className="text-[#3BB77E] w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
              Deals
            </li>
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Home{' '}
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
            </li>
            <li className="font-medium text-[#253D4E] hover:text-[#3BB77E] group">
              About
            </li>
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Shop{' '}
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
            </li>
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Vendors{' '}
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
            </li>
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Mega menu{' '}
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
            </li>
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Blog{' '}
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
            </li>
            <li className="flex font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Page{' '}
              <RiArrowDropDownLine className="text-gray-500 w-6 h-6 group-hover:text-[#3BB77E]" />{' '}
            </li>
            <li className="font-medium text-[#253D4E] hover:text-[#3BB77E] group duration-200">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <ImHeadphones className="text-gray-500 w-6 h-6 mr-2" />
          <div>
            <h4 className="text-[#3BB77E] text-[22px] font-medium">
              {' '}
              1800 - 3333{' '}
            </h4>
            <p className="text-sm text-[#7E7E7E]">24/7 support center</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
