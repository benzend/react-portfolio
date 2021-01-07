import { Switch, Route } from "react-router-dom";
import { BlogMainNavigation } from "./BlogMainNavigation";
import { BlogReactIntro } from "./blogs/BlogReactIntro";
import { BlogNav } from "./BlogNav";

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
