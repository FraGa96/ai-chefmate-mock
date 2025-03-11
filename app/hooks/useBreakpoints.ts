import { useEffect, useState } from 'react';

const SM = 640;
const MD = 768;
const LG = 1024;
const XL = 1280;
const XXL = 1536;

export const useBreakpoints = () => {
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(false);
  const [xxl, setXxl] = useState(false);
  const [screenSize, setScreenSize] = useState('xxl');

  useEffect(() => {
    const handleResize = () => {
      setSm(window.outerWidth >= SM);
      setMd(window.outerWidth >= MD);
      setLg(window.outerWidth >= LG);
      setXl(window.outerWidth >= XL);
      setXxl(window.outerWidth >= XXL);
      if(window.outerWidth >= SM) {
        setScreenSize('sm');
      }
      if(window.outerWidth >= MD) {
        setScreenSize('md');
      }
      if(window.outerWidth >= LG) {
        setScreenSize('lg');
      }
      if(window.outerWidth >= XL) {
        setScreenSize('xl');
      }
      if(window.outerWidth >= XXL) {
        setScreenSize('xxl');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return {
    sm,
    md,
    lg,
    xl,
    xxl,
    screenSize,
  };
};
