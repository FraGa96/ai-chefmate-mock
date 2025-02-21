import Button from '~/components/button';
import habits from './assets/habits.png';
import food1 from './assets/food-1.png';
import food2 from './assets/food-2.png';
import groceries from './assets/groceries.png';
import dot1 from './assets/basket.svg';
import dot2 from './assets/carrot.svg';
import dot3 from './assets/bread.svg';
import dot4 from './assets/cherry.svg';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center bg-custom-light relative pb-20">
      <h1 className="max-w-[800px] text-center">
        Elevate Your Mealtime with AI-Powered Personalization
      </h1>

      <div className="flex flex-row gap-8">
        <div>
          <div className="bg-white rounded-[30px] p-3 flex flex-col items-center">
            <p className="mb-6 w-[90%]">
              <b className="text-[61px]">95%</b>

              <br />

              <span className="text-[26px]">
                Improved Eating Habits
              </span>
            </p>

            <img alt="" src={habits} />
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mt-5 mb-15 text-center text-[26px]">Effortless Planning, Healthier Eating</p>

          <div className="flex flex-row gap-8">
            <div>
              <img alt="" src={food1} />
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-10">
                <Button label="Try Our Demo" variant="light" />

                <Button label="Start For Free" variant="simpleGreen" />
              </div>

              <p className={'flex flex-col bg-custom-green rounded-[34px] text-custom-light-green'
                + ' w-[390px] text-center text-[61px] py-10 mt-20'}>
                <b>30 000 +</b>

                <span className="text-[30px]">Happy users</span>
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-3 flex flex-col items-center">
              <p>
                <img alt="" className="mb-6" src={groceries} />

                <b className="text-[61px]">25%</b>

                <br />

                <span className="text-[26px]">Saved on Groceries</span>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img alt="" src={food2} />
          </div>
        </div>
      </div>

      <div className="absolute flex justify-between w-[1100px] mt-[70px]">
        <div className="h-[200px] flex items-center">
          <img alt="" src={dot1} className="self-start" />

          <img alt="" src={dot2} className="self-end" />
        </div>

        <div className="h-[200px] flex items-center">
          <img alt="" src={dot3} className="self-end" />

          <img alt="" src={dot4} className="self-start" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
