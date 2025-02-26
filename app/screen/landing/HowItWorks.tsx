import { useCallback, useMemo, useState } from 'react';
import SectionTitle from '~/components/sectionTitle';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import Button from '~/components/button';

const STEPS = [
  {
    title: 'Personalize Your Profile',
    description: 'Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.',
    image: step1,
  },
  {
    title: 'Get Your Plan',
    description: 'Our AI technology tailors every meal plan to fit your unique needs.',
    image: step2,
  },
  {
    title: 'Change Your Habits',
    description: 'Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.',
    image: step3,
  },
];

interface StepProps {
  description: string;
  pos: number;
  title: string;
}
const Step = ({ title, description, pos }: StepProps) => (
  <div className="h-[300px]">
    <h3 className="flex flex-col mb-10">
      <i className="lg:text-[61px]">{String(pos).padStart(2, '0')}</i>

      {title}
    </h3>

    <p>{description}</p>
  </div>
);

interface PhotosProps {
  selectedStep: number;
}
const Photos = ({
  selectedStep = 0,
}: PhotosProps) => {
  const classNameStepSelected = 'absolute left-1/32 lg:rotate-15 lg:left-7/32'
    + ' w-[407.89px] lg:w-[477.89px] xl:w-[517.89px] 2xl:w-[567.89px]';
  const classNameNextStep = 'absolute -top-1/32 left-3/32 hidden rotate-5 lg:flex'
    + ' w-[427.89px] lg:w-[477.89px] xl:w-517.89px] 2xl:w-[567.89px]';
  const classNameLastStep = 'absolute top-1/16 hidden lg:flex'
    + ' w-[278px] lg:w-[348px] xl:w-[398px] 2xl:w-[448px]';

  const classNameStepSelectedBg = '';
  const classNameNextStepBg = 'left-1 top-0 absolute h-full bg-white opacity-50 rounded-[50px] w-[407.89px] lg:w-[477.89px] xl:w-[517.89px] 2xl:w-[567.89px]';
  const classNameLastStepBg = 'top-0 absolute h-full bg-white opacity-50 rounded-[40px] w-[278px] lg:w-[348px] xl:w-[398px] 2xl:w-[448px]';

  const stepsSorted = useMemo(() => {
    const next = selectedStep + 1 >= STEPS.length ? 0 : selectedStep + 1;
    const last = next + 1 >= STEPS.length ? 0 : next + 1;
    const steps = [
      { step: STEPS[last], classNameBg: classNameLastStepBg, className: classNameLastStep },
      { step: STEPS[next], classNameBg: classNameNextStepBg, className: classNameNextStep },
      { step: STEPS[selectedStep], classNameBg: classNameStepSelectedBg, className: classNameStepSelected },
    ];
    return steps;
  }, [selectedStep]);
  return (
    <div
      className={'flex-1/3 lg:flex-1/2 max-md:hidden relative'
        + ' lg:mt-10'
      }
    >
      {stepsSorted.map((step, index) => (
        <div key={index} className={`flex items-start justify-start ${step.className}`}>
          <div className="relative">
            <img alt="" src={step.step.image} />

            <div className={step.classNameBg} />
          </div>
        </div>
      ))}
    </div>
  );
};

const HowItWorks = () => {
  const [step, setStep] = useState(0);

  const stepMemo = useMemo(() => STEPS[step], [step]);

  const handleNextStep = useCallback(() => {
    setStep((prevStep) => {
      const newStep = prevStep + 1;
      if (newStep >= STEPS.length) {
        return prevStep;
      }
      return newStep;
    });
  }, []);

  const handlePrevStep = useCallback(() => {
    setStep((prevStep) => {
      const newStep = prevStep - 1;
      if (newStep < 0) {
        return prevStep;
      }
      return newStep;
    });
  }, []);

  return (
    <div className="px-10 pt-20 bg-custom-light relative">
      <SectionTitle
        title="How it works"
        description="Step into the world of hassle-free meal planning with our easy 3-step process"
      />

      <div className="flex flex-row lg:flex-row">
        <div className="flex flex-col flex-1/3 mt-20">
          <div className="flex flex-col max-w-[529px] h-[597px] justify-between">
            <Step title={stepMemo.title} description={stepMemo.description} pos={step + 1} />

            <div className="flex gap-4">
              <Button
                iconClassName="rotate-180"
                variant="green"
                withIcon
                onClick={handlePrevStep}
                disabled={step === 0}
              />

              <Button
                variant="green"
                withIcon
                onClick={handleNextStep}
                disabled={step === STEPS.length - 1}
              />
            </div>

            <div className="z-1">
              <p>
                {String(step + 1).padStart(2, '0')}/{String(STEPS.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 left-0 bg-white h-30 w-full">
          <div
            className={'block h-20 absolute w-[50%]'
              + ' bg-custom-light top-0 left-0 rounded-br-[980px]'
              + ' lg:w-[33%]'
            }
          />
        </div>

        <Photos selectedStep={step} />
      </div>
    </div>
  );
};

export default HowItWorks;
