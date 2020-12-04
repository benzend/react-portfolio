import HomeHeader from "./home-page/components/HomeHeader";
import HomeMain from "./home-page/components/HomeMain";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

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
