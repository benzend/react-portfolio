import { Typography } from "@material-ui/core";

import { BlogNav } from "./blog-page/components/BlogNav";

export const BlogMainNavigation = () => {
  return (
    <div>
      <BlogNav />
      <Typography variant="h1">Blog</Typography>
    </div>
  );
};
