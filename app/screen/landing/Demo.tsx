// import Vimeo from '@u-wave/react-vimeo';
import SectionTitle from '~/components/sectionTitle';
// import { useBreakpoints } from '~/hooks/useBreakpoints';
// const VIMEO_DEMO = 'https://vimeo.com/235215203';

const Demo = () => {
//   const all = useBreakpoints();
//   console.log(all);
  return (
    <div className="pl-10 relative">
      <div className="w-full h-20">
        <div
          className={'hidden h-20 absolute w-[50%]'
            + ' bg-custom-light top-0 right-0 rounded-bl-[980px]'
            + ' md:block lg:w-[33%]'
          }
        />
      </div>

      <SectionTitle
        description="See how it works: your personalized meal planning journey"
        title="Demo"
      />

      <div
        className={'flex flex-col-reverse p-8 justify-between'
          + ' lg:border-2 lg:border-r-0 lg:rounded-l-[980px]'
          + ' lg:flex-row pr-10'
        }
      >
        <div className="border-2 rounded-[980px] flex-2/3 items-center justify-center flex">
          {/* <Vimeo
            video="x2to0hs"
          // video={VIMEO_DEMO}
          // width={1045}
          // height={610}
          // controls={false}
          // style={{
          //   // borderRadius: '980px',
          //   overflow: 'hidden',
          // }}
          /> */}
          <img alt="video" className="h-[610px] w-[500px]" src="" />
        </div>

        <p
          className={'text-[30px] flex-2/3 text-center'
            + ' lg:text-right lg:text-[66px]'}
        >
          Every meal is a chance to nourish your body, inspire your mind, and feed your soul.
        </p>
      </div>
    </div>
  );
};

export default Demo;
