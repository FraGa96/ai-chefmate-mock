import Vimeo from '@u-wave/react-vimeo';
import SectionTitle from '~/components/sectionTitle';
import { ClientOnly } from 'remix-utils/client-only';
import { useBreakpoints } from '~/hooks/useBreakpoints';
import { useEffect, useState } from 'react';
import Button from '~/components/button';
const VIMEO_DEMO = 'https://vimeo.com/235215203';

const XXL = {
  width: 1045,
  height: 585,
};

const XL = {
  width: 643,
  height: 400,
};


// TODO: Handle play
const Demo = () => {
  const [videoDimension, setVideoDimension] = useState(XXL);
  const { screenSize } = useBreakpoints();

  useEffect(() => {
    switch (screenSize) {
      case 'sm':
      case 'md':
      case 'lg':
      case 'xl':
        setVideoDimension(XL);
        break;
      case 'xxl':
      default:
        setVideoDimension(XXL);
    }
  }, [screenSize]);

  return (
    <ClientOnly>
      {() => (
        <div className="pl-10 lg:pl-20 relative pb-20">
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
            className={'flex flex-col-reverse p-8 justify-between items-center gap-5'
              + ' lg:border-2 lg:border-r-0 lg:rounded-l-[980px]'
              + ' lg:flex-row pr-10'
            }
          >
            <div
              className={'border-2 rounded-[980px] flex-2/3 items-center'
                + ' max-w-[600px] max-h-[365px] overflow-hidden justify-center flex'
                + ' relative'
                + ' 2xl:max-w-[1024px] 2xl:max-h-[800px]'}
            >
              <Vimeo
                video={VIMEO_DEMO}
                width={videoDimension.width}
                height={videoDimension.height}
                controls={false}
                style={{
                  borderRadius: '950px',
                  overflow: 'hidden',
                }}
              />

              <Button className="absolute" label="Play" variant="green"/>
            </div>

            <p
              className={'text-[30px] flex-2/3 text-center'
                + ' lg:text-right lg:text-[46px] xl:text-[66px]'}
            >
              Every meal is a chance to nourish your body, inspire your mind, and feed your soul.
            </p>
          </div>
        </div>
      )}
    </ClientOnly>
  );
};

export default Demo;
