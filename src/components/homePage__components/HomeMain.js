import HomeContactSection from "./HomeContactSection";
import HomeProjectsSection from "./HomeProjectsSection";
import HomeAboutSection from "./HomeAboutSection";

function HomeMain() {
  return (
    <main className="main">
      <HomeProjectsSection />
      <HomeAboutSection />
      <HomeContactSection />
    </main>
  );
}

export default HomeMain;
