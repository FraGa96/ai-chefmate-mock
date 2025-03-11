import SectionTitle from '~/components/sectionTitle';
import { testimonials } from './assets/testimonials';
import quoteDark from './assets/quote-dark.svg';
import quoteGreen from './assets/quote-green.svg';

interface QuoteProps {
  authorPhoto: string;
  authorName: string;
  text: string;
  dark?: boolean;
}
const Quote = ({
  authorName = '',
  authorPhoto,
  dark = false,
  text = '',
}: QuoteProps) => (
  <div
    className={'py-15 px-[50px] rounded-[24px] w-[395px]'
      + ` ${dark
        ? 'bg-custom-green text-custom-light'
        : 'bg-custom-light'}`
    }
  >
    <p className="text-inherit mb-[15px]">{text}</p>

    <img alt="" className="float-right" src={dark ? quoteGreen : quoteDark} />

    <div className="flex flex-row gap-[15px] mt-[45px] items-center">
      <img alt="" src={authorPhoto} />

      <p className="text-inherit">{authorName}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="px-10 lg:px-20 pt-40">
      <SectionTitle
        title="Testimonials"
        description="Real stories from satisfied users: see how our platform changes lives"
      />

      <div
        className={'flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap mt-25 gap-5'}
      >
        {testimonials.map((quote, index) => (
          <Quote
            key={quote.author.photo}
            authorName={quote.author.name}
            authorPhoto={quote.author.photo}
            text={quote.text}
            dark={index === 1}
          />
        ))}
      </div>
    </div >
  );
};

export default Testimonials;
