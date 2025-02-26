type SectionTitleProps = {
  description?: string;
  title?: string;
}

const SectionTitle = ({ description='', title=''}: SectionTitleProps) => {
  return (
    <div className="flex flex-row bg-transparent">
      <h2>{title}</h2>

      <div className="bg-linear-120 from-transparent from-49% via-custom-green via-50% to-51% to-transparent w-[100px]" />

      <p className="self-center text-[18px] max-w-[435px] lg:text-[22px]">{description}</p>
    </div>
  );
};

export default SectionTitle;
