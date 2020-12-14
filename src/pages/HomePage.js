import { HomeHeader, HomeMain, HomeNav } from "./home-page/components";
import { Footer } from "../components/Footer";

// don't forget layout component

export const HomePage = () => {
  return (
    <div>
      <HomeNav />
      <HomeHeader />
      <HomeMain />
      <Footer />
    </div>
  );
};
