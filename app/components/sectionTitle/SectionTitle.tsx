type SectionTitleProps = {
  description?: string;
  title?: string;
}

const SectionTitle = ({ description='', title=''}: SectionTitleProps) => {
  return (
    <div className="flex flex-row">
      <h2>{title}</h2>

      <div className="bg-linear-120 from-white from-49% via-custom-green via-50% to-51% to-white w-[100px]" />

      <p className="self-center text-[18px] lg:text-[22px]">{description}</p>
    </div>
  );
};

export default SectionTitle;
