import { useCallback, useState } from 'react';
import Button from '~/components/button';
import SectionTitle from '~/components/sectionTitle';

const faq = [
  {
    id: 1,
    question: 'How does the AI create personalized meal plans?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },
  {
    id: 3,
    question: 'How does the grocery delivery service work?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },
  {
    id: 5,
    question: 'Are there options for budget-conscious users?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },
  {
    id: 7,
    question: 'How can I access nutrition education and healthy eating tips?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },
];

const faq2 = [
  {
    id: 2,
    question: 'Can I integrate special dietary requirements into my meal plan?',
    answer: 'Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly.',
  },
  {
    id: 4,
    question: 'How does the platform accommodate allergies and food sensitivities?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },

  {
    id: 6,
    question: 'Can I adjust my meal plans after they\'ve been created?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },
  {
    id: 8,
    question: 'What makes your AI-driven meal planning different from other meal planning services?',
    answer: 'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
  },
];

interface QuestionProps {
  question: string;
  answer: string;
}
const Question = ({ question, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={'flex flex-row rounded-[24px] gap-10 items-center'
        + ` ${isOpen
          ? 'bg-custom-light p-[50px] mb-10 min-h-[312px]'
          : 'px-[50px] py-[20px]'}`}
    >
      <Button
        onClick={handleOpen}
        variant={isOpen ? 'green' : 'white'}
        className={`!px-5 items-center justify-center ${isOpen ? 'self-start !w-[64px] !h-[77px]' : '!w-[64px] !h-[64px]'}`}
        iconClassName={`${isOpen ? 'rotate-270' : 'rotate-90'}`}
        withIcon
      />

      <div className={`items-center max-w-[590px] ${isOpen ? 'self-start' : ''}`}>
        <p className="font-bold">{question}</p>

        {isOpen ? <p className="mt-[30px]">{answer}</p> : null}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="px-10 lg:px-20 pt-40 pb-30">
      <SectionTitle
        title="Frequently Asked Questions"
        description="Meal planning made easy: your questions, answered"
      />

      <div
        className={'flex flex-col lg:flex-row mt-25 gap-10 justify-center'}
      >
        <div className="flex-1/2">
          {faq.map((q) => (
            <Question
              key={q.id}
              answer={q.answer}
              question={q.question}
            />
          ))}
        </div>

        <div className="flex-1/2">
          {faq2.map((q) => (
            <Question
              key={q.id}
              answer={q.answer}
              question={q.question}
            />
          ))}
        </div>
      </div>
    </div >
  );
};

export default FAQ;
