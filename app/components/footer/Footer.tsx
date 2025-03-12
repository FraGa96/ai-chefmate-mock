import { Link } from 'react-router';
import logo from './logo-green.svg';
import facebook from './facebook.svg';
import x from './x.svg';
import tiktok from './tiktok.svg';

const Footer = () => {
  return (
    <footer
      className={'bg-custom-green py-[110px] px-5'
        + ' flex flex-col'
        + ' md:py-[110px] md:px-35'
      }
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col flex-1/2">
          <div className="flex flex-row gap-[90px]">
            <img alt="" className="self-start" src={logo} />

            <div className="grid grid-cols-2 gap-[90px]">
              <Link to="#" className="text-custom-light-green underline text-[22px]">Recipes</Link>

              <Link to="#" className="text-custom-light-green underline text-[22px]">Customer Support</Link>

              <Link to="#" className="text-custom-light-green underline text-[22px]">Blog</Link>

              <Link to="#" className="text-custom-light-green underline text-[22px]">Your Profile</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1/2 self-stretch gap-35">
          <p className="text-custom-light-green flex-1">
            Join us on our journey to make meal planning simple and joyful. Connect with us on social media, explore our FAQs for quick answers, or drop us a line anytime.
          </p>

          <div className="flex flex-col gap-5 w-[50px]">
            <img alt="facebook" className="w-[50px]" src={facebook} />

            <img alt="x" className="w-[50px]" src={x} />

            <img alt="tiktok" className="w-[50px]" src={tiktok} />
          </div>
        </div>
      </div>


      <p className="text-custom-light mt-15">© 2064 AIChefMate. All rights reserved. | <Link to="#" className="underline">Privacy Policy</Link> | <Link to="#" className="underline"> Terms of Use</Link></p>
    </footer >
  );
};

export default Footer;
