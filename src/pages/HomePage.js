import { HomeHeader, HomeMain, HomeNav } from "../components";
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
