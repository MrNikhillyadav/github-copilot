import {Hero} from "./sections/Hero";
import {Features} from "./sections/Features"
import {Assistance} from "./sections/Assistance"
import {Pricing} from "./sections/Pricing"
import {Footer} from "./sections/Footer"
import FaQs from "./sections/FaQs";

export default function Home() {
  return (
    <div className="text-white">
      <Hero/>
      <Features/>
      <Assistance/>
      <Pricing/>
      <FaQs/>
      <Footer />
    </div>
  );
}
