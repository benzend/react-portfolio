import { HomeHeader, HomeMain } from "./home-page/components";
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
