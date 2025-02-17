import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatIs from "../components/WhatIs";

const Home = () => {
  return (
    <>
      <Header />
      <img
        style={{ paddingTop: "60px" }}
        src="/shady_hippo.png"
        alt="shady hippo"
      />
      <WhatIs />
      <Footer />
    </>
  );
};
export default Home;
