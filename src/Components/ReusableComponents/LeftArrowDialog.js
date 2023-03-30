import React, { useContext } from "react";
import { styled } from "@mui/system";

import { Box, Dialog } from "@mui/material";
import BackIcon from "../../assets/icons/BackIcon";

// const DialogComponent = styled(Dialog)((props) => ({
//   "& .MuiDialog-container": {
//     "& .MuiPaper-root": {
//       width: props.width ? props.width : "100%",
//       maxWidth: props.width,
//       borderRadius: 0,
//       backgroundColor: 'transparent'
//     },
//   },
// }));

export const LeftArrowDialog = (props) => {
  //   const { open, onClose, width } = props;

  return (
    <Box sx={{ pr: 10 }}>
      <BackIcon sx={{ fill: "black" }} />
    </Box>
  );
};

export default LeftArrowDialog;
