import { whyChoose } from "../../data/data";
import Heading from "../reusable/Heading";

const WhyChooseList = () => {
  return (
    <div className="py-4">
      {/* title */}
      <Heading
        title={"*Why Choose Us?*"}
        style={"font-semibold text-xl mb-4"}
      />

      {/* list */}
      <ul className="list-none list-inside space-y-2">
        {whyChoose?.map(({ label, description }, idx) => (
          <li key={idx}>
            <span className="font-medium ms-1">- *{label}*</span>: {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseList;
