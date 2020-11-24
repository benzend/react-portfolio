import HomeContactSection from "./HomeContactSection";
import HomeProjectsSection from "./HomeProjectsSection";
import HomeAboutSection from "./HomeAboutSection";

function HomeMain() {
  return (
    <main className="main">
      <HomeContactSection />
      <HomeProjectsSection />
      <HomeAboutSection />
    </main>
  );
}

export default HomeMain;
