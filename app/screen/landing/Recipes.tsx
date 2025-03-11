import SectionTitle from '~/components/sectionTitle';
import recipe1 from './assets/recipe-1.png';
import recipe2 from './assets/recipe-2.png';
import recipe3 from './assets/recipe-3.png';
import recipe4 from './assets/recipe-4.png';
import Button from '~/components/button';

const Recipes = () => {
  return (
    <div className="px-10 lg:px-20 pt-40">
      <SectionTitle
        title="Recipes"
        description="Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences"
      />

      <div
        className={'flex flex-col mt-25 gap-[53px] items-center xl:flex-row xl:items-stretch'}
      >
        <div
          className={'flex flex-col flex-1/2 gap-[31px]'}
        >
          <div
            className={'flex border-2 border-custom-green'
              + ' rounded-[50px] py-10 px-15 gap-10'
              + ' flex-col md:flex-row'}
          >
            <div>
              <h4 className="mb-[35px]">Savory Quinoa and Roasted Vegetable Bowl</h4>

              <Button label="Learn More" withIcon variant="green" />
            </div>

            <img alt="" className="self-center" src={recipe1} />
          </div>

          <div
            className={'flex bg-custom-light-green'
              + ' rounded-full py-10 px-15 gap-10'
              + ' flex-col md:flex-row'}
          >
            <img alt="" className="self-center" src={recipe2} />

            <div className="flex flex-col items-center md:flex-col md:items-start">
              <h4 className="mb-[35px]">Herb-Infused Grilled Chicken with Seasonal Greens</h4>

              <Button label="Learn More" withIcon variant="green" />
            </div>
          </div>

          <div
            className={'flex bg-custom-light'
              + ' rounded-[50px] py-10 px-15 gap-10'
              + ' flex-col md:flex-row'}
          >
            <div>
              <h4 className="mb-[35px]">Mediterranean Lentil and Kale Salad</h4>

              <Button label="Learn More" withIcon variant="green" />
            </div>

            <img alt="" className="self-center" src={recipe3} />
          </div>
        </div>

        <div
          className={'flex flex-row flex-1/2 relative'}
        >
          <img alt="" className="mt-2" src={recipe4} />

          <div className="absolute flex items-center">
            <p className="text-[34px] max-w-59">
              Explore more recipes
            </p>

            <Button withIcon variant="light" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Recipes;
