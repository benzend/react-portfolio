import { useEffect, useState } from "react";
import { HomeHeader, HomeMain, HomeNav } from "./home-page/components";
import { Footer } from "../components/Footer";

// don't forget layout component

export const HomePage = () => {
  const [yoffset, setYoffset] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYoffset(window.pageYOffset);
    });
  }, []);

  return (
    <div>
      <HomeNav yoffset={yoffset} />
      <HomeHeader yoffset={yoffset} />
      <HomeMain yoffset={yoffset} />
      <Footer />
    </div>
  );
};
