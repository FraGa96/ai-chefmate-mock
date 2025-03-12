import { NavLink } from 'react-router';
import logo from './logo.svg';
import Button from '../button';

// TODO: Sidebar for mobile view
const Header = () => {
  return (
    <header
      className={'bg-custom-light py-8 px-5 sticky top-0 z-1'
        + ' flex items-center justify-between'
        + ' md:py-10 md:px-20'
      }
    >
      <img alt="AI Chefmate" src={logo} />

      <nav
        className={'flex gap-5 [&>a]:text-custom-green [&>a]:text-[18px] ml-10'
          + ' sm:gap-7'
          + ' md:ml-20 gap-15'
          + ' lg:[&>a]:text-[22px] lg:gap-20 lg:ml-40'
        }
      >
        <NavLink to="/recipes" className="font-(family-name:--font-worksans) font-medium">Recipes</NavLink>

        <NavLink to="/blog" className="font-(family-name:--font-worksans) font-medium">Blog</NavLink>

        <NavLink to="/support" className="font-(family-name:--font-worksans) font-medium">Customer Support</NavLink>
      </nav>

      <div className="flex items-center gap-2">
        <NavLink
          className={'text-custom-green text-[18px]'
            + ' lg:text-[22px] font-(family-name:--font-worksans) font-medium'
          }
          to="/recipes"
        >
          Log In
        </NavLink>

        <Button label="Start For Free" />
      </div>
    </header >
  );
};

export default Header;
