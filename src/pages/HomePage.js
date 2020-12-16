import { HomeHeader, HomeMain, HomeNav } from "./home-page/components";
import { Footer } from "../components/Footer";

// don't forget layout component

export const HomePage = ({ yoffset }) => {
  return (
    <div>
      <HomeNav yoffset={yoffset} />
      <HomeHeader yoffset={yoffset} />
      <HomeMain yoffset={yoffset} />
      <Footer />
    </div>
  );
};
