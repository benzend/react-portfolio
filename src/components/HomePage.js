import Nav from "./Nav";
import HomeHeader from "./homePage__components/HomeHeader";
import HomeMain from "./homePage__components/HomeMain";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <HomeHeader />
      <HomeMain />
      <Footer />
    </div>
  );
}
