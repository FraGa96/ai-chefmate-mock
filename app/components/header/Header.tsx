import { NavLink } from 'react-router';
import logo from './logo.svg';
import Button from '../button';

const Header = () => {
  return (
    <header
      className={'bg-custom-light py-10 px-20 sticky top-0 z-1'
        + ' flex items-center justify-between'
      }
    >
      <img alt="AI Chefmate" src={logo} />

      <nav className="flex gap-20 [&>a]:text-custom-green [&>a]:text-[22px] ml-40">
        <NavLink to="/recipes">Recipes</NavLink>

        <NavLink to="/blog" >Blog</NavLink>

        <NavLink to="/support" >Customer Support</NavLink>
      </nav>

      <div className="flex items-center gap-2">
        <NavLink className="text-custom-green text-[22px]" to="/recipes">Log In</NavLink>
        <Button label="Start For Free" />
      </div>
    </header >
  );
};

export default Header;
