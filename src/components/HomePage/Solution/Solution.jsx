import { solutions } from "../../../data/data";
import Containter from "../../reusable/Containter";
import Heading from "../../reusable/Heading";
import SolutionCard from "./SolutionCard";

const Solution = () => {
  return (
    <section className="bg-gray-100">
      <Containter>
        {/* title */}
        <Heading
          title={"Ready for a faster solution?"}
          style={"text-center font-bold text-2xl md:text-4xl"}
        />

        {/* solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:md:grid-cols-4 gap-6 mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          {solutions?.map((solution, idx) => (
            <SolutionCard key={idx} data={solution} />
          ))}
        </div>
      </Containter>
    </section>
  );
};

export default Solution;
