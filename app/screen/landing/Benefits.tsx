import SectionTitle from '~/components/sectionTitle';
import groceriesBig from './assets/groceries-bag.png';
import groceriesRound from './assets/groceries-bag2.png';

const Benefits = () => {
  return (
    <div className="px-10 lg:px-20 pt-40">
      <SectionTitle
        title="Benefits"
        description="Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet."
      />

      <div className="flex flex-col mt-20 gap-[21px] lg:flex-row md:flex-wrap xl:flex-nowrap">
        <div className="flex flex-col items-center md:flex-row lg:flex-col">
          <div
            className={'flex flex-col items-center justify-center'
              + ' px-[50px] h-[546px] max-w-[394px] rounded-[240px] bg-custom-light-green'
              + ' '}
          >
            <h3 className="text-[40px] xl:text-[34px] 2xl:text-[40px]">Personalized Nutrition</h3>

            <p className="mt-10">
              Get meal plans tailored to your unique dietary needs,
              preferences, and goals, ensuring a balanced and enjoyable diet.
            </p>
          </div>

          <div
            className={'flex flex-col items-center justify-center'
              + ' px-[50px] h-[437px] max-w-[394px] rounded-[240px]'
              + ' '}
          >
            <h3>Cost-Effective Shopping</h3>

            <p className="mt-10">
              Reduce food waste and save money with efficient grocery shopping
              lists that align perfectly with your meal plans.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row lg:flex-col">
          <div
            className={'flex flex-col items-center justify-center'
              + ' h-[546px] rounded-[240px]'
              + ' '}
          >
            <img alt="" src={groceriesBig} />
          </div>

          <div
            className={'flex flex-col justify-center items-center'
              + ' px-[50px] h-[437px] max-w-[394px] rounded-[240px]'
              + ' '}
          >
            <h3>Seamless Grocery Delivery</h3>

            <p className="mt-10">
              Enjoy the convenience of having all your meal ingredients delivered
              right to your doorstep through our local grocery store partnerships.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row lg:flex-col">
          <div
            className={'flex flex-col items-center justify-center'
              + ' px-[50px] h-[437px] max-w-[394px] rounded-[240px]'
              + ' '}
          >
            <h3>Time-Saving Convenience</h3>

            <p className="mt-10">
              Say goodbye to meal planning stress. Our AI-driven platform simplifies
              your weekly meal preparation, saving you valuable time.
            </p>
          </div>

          <div
            className={'flex flex-col items-center justify-center'
              + ' px-[50px] h-[546px] max-w-[394px] rounded-[240px] bg-custom-green'
              + ' '}
          >
            <h3 className="text-custom-light-green">Community Support</h3>

            <p className="mt-10 text-custom-light">
              Join a community of like-minded individuals, share experiences, recipes,
              and tips, and get motivated on your journey to healthier eating.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row lg:flex-col">
          <div
            className={'flex flex-col items-center justify-center'
              + ' px-[50px] h-[546px] max-w-[394px] rounded-[240px] bg-custom-light'
              + ' '}
          >
            <h3>Healthier Eating Habits</h3>

            <p className="mt-10">
              Easily adopt a healthier lifestyle with nutrient-rich meal plans and
              educational content on nutrition and wellness.
            </p>
          </div>

          <div
            className={'flex flex-col items-center justify-center'
              + ' h-[546px] rounded-[240px]'
              + ' '}
          >
            <img alt="" src={groceriesRound} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
