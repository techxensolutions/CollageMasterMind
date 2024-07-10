import Image from "next/image";
import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-primary text-white py-16">
      <div className=" mx-auto px-[5%] ">
      <div>
            <Link href="/">
              <div className="flex items-center mb-4 cursor-pointer">
                <Image src="/images/Footer.png" width={250} height={60} alt="College Mastermind" />
              </div>
            </Link>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/partnership">Partnership</Link>
              </li>
              <li>
                <Link href="/packages">Packages</Link>
              </li>
              <li>
                <Link href="/team">Meet Our Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/5-day-intensive">5-Day Intensive</Link>
              </li>
              <li>
                <Link href="/services/test-prep">Test Prep</Link>
              </li>
              <li>
                <Link href="/services/admissions">Admissions Service</Link>
              </li>
              <li>
                <Link href="/services/scholarships">Scholarships</Link>
              </li>
              <li>
                <Link href="/services/internship">Internship</Link>
              </li>
              <li>
                <Link href="/services/events">Events</Link>
              </li>
              <li>
                <Link href="/services/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Countries</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/countries/saudi-arabia">Saudi Arabia</Link>
              </li>
              <li>
                <Link href="/countries/uae">UAE</Link>
              </li>
              <li>
                <Link href="/countries/qatar">Qatar</Link>
              </li>
              <li>
                <Link href="/countries/oman">Oman</Link>
              </li>
              <li>
                <Link href="/countries/kuwait">Kuwait</Link>
              </li>
              <li>
                <Link href="/countries/bahrain">Bahrain</Link>
              </li>
              <li>
                <Link href="/countries/china">China</Link>
              </li>
              <li>
                <Link href="/countries/india">India</Link>
              </li>
              <li>
                <Link href="/countries/south-korea">South Korea</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Subscribe Our Newsletter</h3>
            <form className="mt-4 flex border-b border-white">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md text-white bg-primary outline-none"
              />
              <button type="submit" className="">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13.3158L27 1L14.6842 27L11.9474 16.0526L1 13.3158Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </form>
            <div className="mt-8 flex space-x-4">
              <a className="text-white hover:text-gray-300">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 26C1 12.1929 12.1929 1 26 1C39.8071 1 51 12.1929 51 26C51 39.8071 39.8071 51 26 51C12.1929 51 1 39.8071 1 26Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M25.8207 9.86523C17.0079 9.86523 9.86328 17.0465 9.86328 25.9047C9.86328 33.9463 15.7567 40.5859 23.4358 41.7459V30.1559H19.4878V25.9397H23.4358V23.1342C23.4358 18.4894 25.6873 16.4502 29.5279 16.4502C31.3674 16.4502 32.3401 16.5872 32.8007 16.6499V20.3303H30.1807C28.5502 20.3303 27.9808 21.8839 27.9808 23.6351V25.9397H32.7593L32.1109 30.1559H27.9808V41.7801C35.7695 40.7179 41.7782 34.0243 41.7782 25.9047C41.7782 17.0465 34.6336 9.86523 25.8207 9.86523Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a className="text-white hover:text-gray-300">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 26C1 12.1929 12.1929 1 26 1C39.8071 1 51 12.1929 51 26C51 39.8071 39.8071 51 26 51C12.1929 51 1 39.8071 1 26Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.0026 12.666C22.3814 12.666 21.927 12.6818 20.5047 12.7466C19.0853 12.8116 18.1164 13.0363 17.2686 13.366C16.3916 13.7066 15.6477 14.1621 14.9066 14.9035C14.1649 15.6447 13.7094 16.3886 13.3677 17.2652C13.0371 18.1133 12.8121 19.0825 12.7482 20.5014C12.6846 21.9236 12.668 22.3783 12.668 25.9995C12.668 29.6206 12.6841 30.0737 12.7485 31.4959C12.8138 32.9154 13.0385 33.8843 13.368 34.7321C13.7088 35.609 14.1644 36.3529 14.9058 37.094C15.6466 37.8357 16.3905 38.2924 17.2669 38.633C18.1152 38.9627 19.0844 39.1874 20.5036 39.2524C21.9258 39.3171 22.38 39.333 26.0009 39.333C29.6223 39.333 30.0754 39.3171 31.4976 39.2524C32.9171 39.1874 33.8871 38.9627 34.7354 38.633C35.6121 38.2924 36.3549 37.8357 37.0957 37.094C37.8374 36.3529 38.293 35.609 38.6346 34.7324C38.9624 33.8843 39.1874 32.9151 39.2541 31.4962C39.318 30.074 39.3346 29.6206 39.3346 25.9995C39.3346 22.3783 39.318 21.9239 39.2541 20.5017C39.1874 19.0822 38.9624 18.1133 38.6346 17.2655C38.293 16.3886 37.8374 15.6447 37.0957 14.9035C36.354 14.1619 35.6124 13.7063 34.7346 13.366C33.8846 13.0363 32.9151 12.8116 31.4957 12.7466C30.0734 12.6818 29.6206 12.666 25.9984 12.666H26.0026ZM24.8064 15.0688C25.1614 15.0682 25.5575 15.0688 26.0025 15.0688C29.5625 15.0688 29.9845 15.0816 31.3903 15.1454C32.6903 15.2049 33.3959 15.4221 33.8659 15.6046C34.4881 15.8463 34.9318 16.1352 35.3981 16.6019C35.8648 17.0685 36.1537 17.513 36.3959 18.1352C36.5784 18.6047 36.7959 19.3102 36.8551 20.6102C36.919 22.0158 36.9329 22.438 36.9329 25.9964C36.9329 29.5548 36.919 29.977 36.8551 31.3826C36.7957 32.6826 36.5784 33.3881 36.3959 33.8576C36.1543 34.4798 35.8648 34.9229 35.3981 35.3893C34.9315 35.8559 34.4884 36.1448 33.8659 36.3865C33.3965 36.5698 32.6903 36.7865 31.3903 36.846C29.9848 36.9098 29.5625 36.9237 26.0025 36.9237C22.4422 36.9237 22.0202 36.9098 20.6147 36.846C19.3146 36.786 18.6091 36.5687 18.1388 36.3862C17.5166 36.1446 17.0721 35.8557 16.6055 35.389C16.1388 34.9223 15.8499 34.479 15.6077 33.8565C15.4252 33.387 15.2077 32.6815 15.1485 31.3815C15.0846 29.9759 15.0718 29.5537 15.0718 25.9931C15.0718 22.4325 15.0846 22.0125 15.1485 20.6069C15.2079 19.3069 15.4252 18.6013 15.6077 18.1313C15.8493 17.5091 16.1388 17.0646 16.6055 16.598C17.0721 16.1313 17.5166 15.8424 18.1388 15.6002C18.6088 15.4168 19.3146 15.2002 20.6147 15.1404C21.8447 15.0849 22.3213 15.0682 24.8064 15.0654V15.0688ZM33.1198 17.2827C32.2365 17.2827 31.5198 17.9985 31.5198 18.8822C31.5198 19.7655 32.2365 20.4822 33.1198 20.4822C34.0031 20.4822 34.7198 19.7655 34.7198 18.8822C34.7198 17.9988 34.0031 17.2827 33.1198 17.2827ZM26.0026 19.1522C22.2211 19.1522 19.1553 22.218 19.1553 25.9995C19.1553 29.7809 22.2211 32.8454 26.0026 32.8454C29.784 32.8454 32.8488 29.7809 32.8488 25.9995C32.8488 22.218 29.784 19.1522 26.0026 19.1522ZM26.0025 21.555C28.457 21.555 30.447 23.5447 30.447 25.9995C30.447 28.4539 28.457 30.4439 26.0025 30.4439C23.5478 30.4439 21.558 28.4539 21.558 25.9995C21.558 23.5447 23.5478 21.555 26.0025 21.555Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a className="text-white hover:text-gray-300">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 26C1 12.1929 12.1929 1 26 1C39.8071 1 51 12.1929 51 26C51 39.8071 39.8071 51 26 51C12.1929 51 1 39.8071 1 26Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M40.9929 22.7535C41.0625 20.7178 40.6217 18.6973 39.7114 16.8797C39.0938 16.1339 38.2366 15.6306 37.2893 15.4575C33.371 15.0984 29.4365 14.9513 25.5026 15.0166C21.5831 14.9483 17.6628 15.0907 13.7582 15.4433C12.9863 15.5851 12.2719 15.9508 11.7023 16.4957C10.4349 17.6762 10.2941 19.6957 10.1532 21.4024C9.94892 24.4709 9.94892 27.5498 10.1532 30.6184C10.194 31.5789 10.3356 32.5324 10.5757 33.4628C10.7455 34.1811 11.089 34.8457 11.5755 35.397C12.149 35.9708 12.8801 36.3573 13.6737 36.5064C16.7097 36.8848 19.7687 37.0417 22.8271 36.9757C27.7558 37.0468 32.0789 36.9757 37.1907 36.5775C38.0039 36.4376 38.7555 36.0506 39.3453 35.4681C39.7395 35.0698 40.034 34.5822 40.2043 34.0459C40.7079 32.4852 40.9552 30.8518 40.9365 29.2104C40.9929 28.4139 40.9929 23.6068 40.9929 22.7535ZM22.3201 30.0637V21.2602L30.6567 25.6833C28.319 26.9917 25.2351 28.4708 22.3201 30.0637Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a className="text-white hover:text-gray-300">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 26C1 12.1929 12.1929 1 26 1C39.8071 1 51 12.1929 51 26C51 39.8071 39.8071 51 26 51C12.1929 51 1 39.8071 1 26Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M36.3545 19.091C35.0564 18.8133 33.8809 18.1283 32.9994 17.1357C32.1179 16.1432 31.5765 14.895 31.4541 13.5732V13H26.9762V30.7713C26.9734 31.558 26.7242 32.3241 26.2636 32.962C25.803 33.5998 25.1541 34.0772 24.4081 34.3272C23.6621 34.5772 22.8565 34.5872 22.1046 34.3558C21.3526 34.1243 20.6921 33.6631 20.2158 33.0369C19.7321 32.4002 19.4638 31.626 19.4498 30.8265C19.4357 30.0271 19.6767 29.2439 20.1378 28.5907C20.5988 27.9374 21.256 27.448 22.0139 27.1934C22.7719 26.9388 23.5912 26.9322 24.3532 27.1746V22.6252C22.6541 22.3904 20.9241 22.6924 19.4052 23.4892C17.8862 24.286 16.6543 25.5376 15.8818 27.069C15.1092 28.6003 14.8346 30.3349 15.0964 32.03C15.3582 33.7252 16.1433 35.2961 17.3419 36.523C18.4849 37.6925 19.9505 38.4949 21.5516 38.8278C23.1527 39.1606 24.8166 39.0088 26.331 38.3917C27.8455 37.7746 29.1417 36.7202 30.0541 35.3632C30.9666 34.0061 31.454 32.4079 31.4541 30.7726V21.692C33.2638 22.9857 35.4336 23.6795 37.6582 23.6755V19.2262C37.2201 19.2267 36.7832 19.1814 36.3545 19.091Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right border-t border-white pt-4">
          <p className="text-sm">
            <a className="hover:underline">Privacy Policy</a>
            {" | "}
            <a className="hover:underline">Legal Terms</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
