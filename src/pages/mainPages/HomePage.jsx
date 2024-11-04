import CustomerFeedback from "../../components/HomePage/Customer/CustomerFeedback";
import Hero from "../../components/HomePage/Hero/Hero";
import Solution from "../../components/HomePage/Solution/Solution";

const HomePage = () => {
  return (
    <>
      {/* hero */}
      <Hero />

      {/* solution */}
      <Solution />

      {/* customer */}
      <CustomerFeedback />
    </>
  );
};

export default HomePage;
