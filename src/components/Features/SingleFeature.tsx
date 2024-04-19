import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full single-feature">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-darkblack bg-opacity-10 text-darkblack">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-darkblack sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-darkblack">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
