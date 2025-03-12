import SectionTitle from '~/components/sectionTitle';
import Button from '~/components/button';
import plans from './assets/plans.json';
import planRight from './assets/plan-right.png';
import planLeft from './assets/plan-left.png';
import { useMemo } from 'react';

interface PlanProps {
  title: string;
  price: number;
  detailList: string[];
  bestFor: string;
  buttonLabel: string;
  pos: number;
}
const Plan = ({ title, price, detailList, bestFor, buttonLabel, pos }: PlanProps) => {
  const className = useMemo(() => {
    switch (pos) {
      case 0:
        return 'max-w-[450px] lg:border-r-0 lg:rounded-r-none lg:rounded-l-[43px]';
      case 1:
        return 'bg-custom-light-green max-w-[480px] pb-[100px]';
      case 2:
        return 'max-w-[450px] lg:border-l-0 lg:rounded-l-none lg:rounded-r-[43px]';
      default:
        return '';
    }
  }, [pos]);

  return (
    <div
      className={'flex flex-col border-2 border-custom-green'
        + ' py-[70px] px-[50px] min-w-[320px]'
        + ' rounded-[43px]'
        + ` ${className}`
      }
    >
      <h3 className="text-center">{title}</h3>

      <p className="text-center ">
        <b className="text-[45px]">${price}</b>

        <br />

        per month
      </p>

      <ul className="list-disc my-10 px-5 text-[22px]">
        {detailList.map((item, index) => (
          <li key={index} className="my-5">{item}</li>
        ))}
      </ul>

      <hr className="border-1" />

      <p className={pos === 2 ? 'mb-0' : ' mt-20 mb-10'}>
        <b>Best For:</b> {bestFor}
      </p>

      <Button className="justify-center" variant="light" label={buttonLabel} />
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="px-10 lg:px-20 pt-40 relative">
      <SectionTitle
        title="Pricing"
        description="Find your perfect plan: tailored pricing for every need"
      />

      <div
        className={'flex flex-col mt-10 lg:flex-row items-center justify-center gap-5 lg:gap-0'}
      >
        <img alt="" className="hidden xl:block" src={planLeft} />

        {plans.map((plan, index) => (
          <Plan
            key={plan.id}
            title={plan.title}
            price={plan.price}
            detailList={plan.details}
            bestFor={plan.bestFor}
            buttonLabel={plan.buttonLabel}
            pos={index}
          />
        ))}

        <img alt="" className="hidden xl:block" src={planRight} />
      </div>

      <div
        className={'block h-20 absolute w-[50%]'
          + ' bg-custom-light -bottom-30 left-0 rounded-tr-[980px]'
          + ' lg:w-[33%]'
        }
      />
    </div>
  );
};

export default Pricing;
