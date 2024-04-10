import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import {motion} from 'framer-motion';

const Features = () => {
  return (
    <>
      <section id="features" className="py-24 md:py-20 lg:py-28" style={{ boxShadow: "20px 20px 20px rgba(255, 255, 255, 0.5)" }}>
        <div className="container">
          <SectionTitle
            title="OnlyFans Growth"
            paragraph="THE ONLYFANS AGENCY BEHIND THE TOP 0.1%"
            center
          />

          <div className="animated-element grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          
        </div>
        
      </section>
    </>
  );
};

export default Features;
