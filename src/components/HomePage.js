import HomeHeader from "./homePage__components/HomeHeader";
import HomeMain from "./homePage__components/HomeMain";
import { Nav } from "./index";
import { Footer } from "./index";

export const HomePage = () => {
  return (
    <div>
      <Nav />
      <HomeHeader />
      <HomeMain />
      <Footer />
    </div>
  );
};
