import { Grid, Box, IconButton } from "@material-ui/core";
import { GitHub, Language } from "@material-ui/icons";

import { useState } from "react";

export const Project = ({
  imgContainer,
  imgOverlay,
  imgTitleStyle,
  img,
  imgTitle,
  imgSource,
  tech,
  techStyle,
  projBtns,
  btnsContainer,
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Grid item>
      <Box
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={imgContainer}
      >
        <Box className={hovering ? imgOverlay + " active" : imgOverlay}>
          <p className={imgTitleStyle}>{imgTitle}</p>
          <p className={techStyle}>{tech}</p>
          <Box className={btnsContainer}>
            <IconButton color="secondary">
              <GitHub />
            </IconButton>
            <IconButton color="secondary">
              <Language />
            </IconButton>
          </Box>
        </Box>
        <img className={img} src={imgSource} />
      </Box>
    </Grid>
  );
};
