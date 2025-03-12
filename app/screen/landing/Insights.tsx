import SectionTitle from '~/components/sectionTitle';
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';
import Button from '~/components/button';

const articles = [
  {
    id: 1,
    title: 'Mastering Meal Prep: Time-Saving Tips for Busy Weekdays',
    photo: blog1,
  },
  {
    id: 2,
    title: 'The Power of Plant-Based: Benefits Beyond the Plate',
    photo: blog2,
  },
  {
    id: 3,
    title: 'Balancing Nutrients: A Guide to a Well-Rounded Diet',
    photo: blog3,
  },
];

const Insights = () => {
  return (
    <div className="px-10 lg:px-20 pt-40 bg-custom-light mt-30 pb-30">
      <SectionTitle
        title="Healthy Insights"
        description="Latest News, Expert Blogs, and Nutritional Learning"
      />

      <div
        className={'flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap mt-25 gap-5'}
      >
        {articles.map((blog) => (
          <div
            key={blog.id}
            className="flex-1/3 bg-white p-[30px] rounded-[50px] flex flex-col items-center gap-[33px]"
          >
            <img alt="" className="self-stretch" src={blog.photo} />

            <h3 className="max-w-[450px]">{blog.title}</h3>

            <Button className="self-start" variant="simpleGreen" label="Read Article" withIcon />
          </div>
        ))}
      </div>
    </div >
  );
};

export default Insights;
