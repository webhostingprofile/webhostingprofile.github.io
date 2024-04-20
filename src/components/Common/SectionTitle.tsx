const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  mt = "50px",
  mbValue = "44px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  mt?: string;
  mbValue?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb, }}
      >
        <h2 className=" text-3xl font-bold !leading-tight text-black dark:text-darkblack sm:text-4xl md:text-[45px]" style={{marginTop: mt, marginBottom: mbValue}}>
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color dark:text-darkblack md:text-lg" style={{marginTop: mt}}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
