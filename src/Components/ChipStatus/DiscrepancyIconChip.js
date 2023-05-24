import React from "react";
import { styled } from "@mui/system";

// import Components
import { Typography } from "@mui/material";

// import Icons
import ErrorIcon from "../../assets/icons/ErrorIcon";

const Chip = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
//   padding: "2px 10px",
padding: "2px",
  borderRadius: 5,
}));

const DiscrepancyIconChip = (props) => {
  return (
    <Chip sx={{ backgroundColor: "#ffc9c9" }}>
      <ErrorIcon color={"#da1e28"} sx={{ fontSize: 14 }} />
    </Chip>
  );
};

export default DiscrepancyIconChip;
