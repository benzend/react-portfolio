import HomeHeader from "./homePage__components/HomeHeader";
import HomeMain from "./homePage__components/HomeMain";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

// don't forget layout component

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
