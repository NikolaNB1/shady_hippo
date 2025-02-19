import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatIs from "../components/WhatIs";

const Home = () => {
  return (
    <>
      <Header />
      <img
        className="top_img"
        src="https://nikolanb1.github.io/shady_hippo/shady_hippo.png"
        alt="shady hippo"
      />
      <WhatIs />
      <Footer />
    </>
  );
};
export default Home;
