import React, { useContext } from "react";
import { styled } from "@mui/system";

import { Box, Dialog } from "@mui/material";
import NextIcon from "../../assets/icons/NextIcon";

const DialogComponent = styled(Dialog)((props) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: props.width ? props.width : "100%",
      maxWidth: props.width,
      borderRadius: 0,
      // backgroundColor: props.isPromoDialog ? 'transparent' : ''
    },
  },
  backdropFilter: "blur(18px)",
}));

export const RightArrowDialog = (props) => {
  const { open, onClose, width } = props;

  return (
    <DialogComponent open={open} width={width} onClose={onClose}>
      <Box sx={{ pr: 10 }}>
        <NextIcon sx={{ fill: "black" }} />
      </Box>
    </DialogComponent>
  );
};

export default RightArrowDialog;
