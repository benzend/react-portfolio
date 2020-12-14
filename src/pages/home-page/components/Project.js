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
  imgAlt,
  tech,
  techStyle,
  btnsContainer,
  gitHubUrl,
  liveUrl,
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
            <IconButton href={gitHubUrl} target="_blank" color="secondary">
              <GitHub />
            </IconButton>
            <IconButton href={liveUrl} target="_blank" color="secondary">
              <Language />
            </IconButton>
          </Box>
        </Box>
        <img className={img} src={imgSource} alt={imgAlt} />
      </Box>
    </Grid>
  );
};
