import { Switch, Route } from "react-router-dom";
import { BlogMainNavigation } from "./blog-page/components/BlogMainNavigation";
import { BlogReactIntro } from "./blogs/BlogReactIntro";
import { BlogNav } from "./blog-page/components/BlogNav";
import { Footer } from "../components/Footer";

export const Blog = () => {
  return (
    <>
      <BlogNav />
      <Switch>
        <Route exact path="/blog" component={BlogMainNavigation} />
        <Route path="/blog/react/intro" component={BlogReactIntro} />
      </Switch>
    </>
  );
};
