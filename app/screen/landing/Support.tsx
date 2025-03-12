import Button from '~/components/button';
import SectionTitle from '~/components/sectionTitle';
import support from './assets/support.png';

const Support = () => {
  return (
    <div className="pl-10 lg:pl-20 relative pb-40">
      <SectionTitle
        description="We’re here to help!"
        title="Need Assistance?"
      />

      <div
        className={'flex flex-col-reverse p-8 justify-between items-center gap-30 mt-20'
          + ' lg:border-2 lg:border-r-0 lg:rounded-l-[980px]'
          + ' lg:flex-row pr-10'
        }
      >
        <div
          className={'border-2 rounded-[980px] flex-2/3 items-center'
            + ' max-w-[600px] max-h-[365px] overflow-hidden justify-center flex'
            + ' relative'
            + ' 2xl:max-w-[1024px] 2xl:max-h-[800px] p-8'}
        >
          <img alt="" className="" src={support} />
        </div>

        <div
          className={'flex-1/4'
            + ' flex flex-col items-center justify-center lg:items-start'}
        >
          <p className="text-[30px] mb-20 text-center lg:text-left">
            Have questions or need help with AIChefMate? Our dedicated support team is ready to assist you.
            Get the answers and assistance you need to make the most of your meal planning experience.
          </p>

          <Button variant="simpleGreen" label="Get Support" />
        </div>
      </div>
    </div>
  );
};

export default Support;
