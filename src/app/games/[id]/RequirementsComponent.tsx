import React from "react";
import { RequirementsType } from "./requirementsChecker";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  infoDividerStyle,
  infoHeadingStyle,
  infoParagraphStyle,
} from "./styles/quickDetailsSectionStyles";
import {
  requirementDivStyle,
  requirementHeadingStyle,
  requirementSectionStyle,
} from "./styles/requirementsSectionStyles";

const RequirementsComponent = ({
  title,
  data,
}: {
  title: string;
  data: RequirementsType | undefined;
}) => {
  if (!data) {
    return undefined;
  }

  return (
    <Box component="section" sx={requirementSectionStyle}>
      <Typography sx={requirementHeadingStyle}>{title}</Typography>
      <Box>
        <Box sx={requirementDivStyle}>
          <Typography sx={infoHeadingStyle}>OS</Typography>
          <Typography sx={infoParagraphStyle}>{data.os ?? "~"}</Typography>
        </Box>
        <Divider component="div" sx={infoDividerStyle} />
        <Box sx={requirementDivStyle}>
          <Typography sx={infoHeadingStyle}>Processor</Typography>
          <Typography sx={infoParagraphStyle}>
            {data.processor ?? "~"}
          </Typography>
        </Box>
        <Divider component="div" sx={infoDividerStyle} />
        <Box sx={requirementDivStyle}>
          <Typography sx={infoHeadingStyle}>Graphics</Typography>
          <Typography sx={infoParagraphStyle}>
            {data.graphics ?? "~"}
          </Typography>
        </Box>
        <Divider component="div" sx={infoDividerStyle} />
        <Box sx={requirementDivStyle}>
          <Typography sx={infoHeadingStyle}>Memory Ram</Typography>
          <Typography sx={infoParagraphStyle}>{data.memory ?? "~"}</Typography>
        </Box>
        <Divider component="div" sx={infoDividerStyle} />
        <Box sx={requirementDivStyle}>
          <Typography sx={infoHeadingStyle}>Storage</Typography>
          <Typography sx={infoParagraphStyle}>{data.storage ?? "~"}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RequirementsComponent;
