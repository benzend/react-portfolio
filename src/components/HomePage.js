import HomeHeader from "./homePage__components/HomeHeader";
import HomeMain from "./homePage__components/HomeMain";
import { Nav } from "./index";
import { Footer } from "./index";
import { useMediaQuery } from "@material-ui/core";

export const HomePage = () => {
  const media900 = useMediaQuery("(min-width: 900px)");
  return (
    <div>
      <Nav />
      <HomeHeader media900={media900} />
      <HomeMain media900={media900} />
      <Footer />
    </div>
  );
};
