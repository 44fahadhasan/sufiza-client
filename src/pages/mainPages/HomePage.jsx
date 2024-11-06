import CustomerFeedback from "../../components/HomePage/Customer/CustomerFeedback";
import Estate from "../../components/HomePage/Estate/Estate";
import Hero from "../../components/HomePage/Hero/Hero";
import Solution from "../../components/HomePage/Solution/Solution";

const HomePage = () => {
  return (
    <>
      {/* hero */}
      <Hero />

      {/* solution */}
      <Solution />

      {/* estate */}
      <Estate />

      {/* customer */}
      <CustomerFeedback />
    </>
  );
};

export default HomePage;
