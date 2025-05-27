const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 my-8 mx-auto text-center text-slate-700">
      <h3 className="text-4xl uppercase border-y py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
