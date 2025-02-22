import Buy from "../components/Buy";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatIs from "../components/WhatIs";

const Home = () => {
  return (
    <>
      <Header />
      <img className="top_img" src="/shady_hippo.png" alt="shady hippo" />
      <WhatIs />
      <Buy />
      <Footer />
    </>
  );
};
export default Home;
