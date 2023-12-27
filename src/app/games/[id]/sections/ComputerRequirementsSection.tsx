import { FetchGameInfoType } from "@/types/getGameInfoType";
import React from "react";
import { requirements } from "../requirementsChecker";
import RequirementsComponent from "../RequirementsComponent";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

const articleStyle: SxProps = {
  maxWidth: "1010px",
  margin: "0 auto",
  display: "flex",
  gap: "4.75rem",
  flexWrap: "wrap",
};

const ComputerRequirements = async ({ data }: { data: FetchGameInfoType }) => {
  const platform = data.response.gameInfoResponse.platforms.find(
    (ele) => ele.platform.id === 4
  );

  const minimumRequirements = requirements(platform!.requirements.minimum);

  const recommendedRequirements = requirements(
    platform!.requirements.recommended
  );

  return (
    <Box component="article" sx={articleStyle}>
      <>
        <RequirementsComponent
          title="Mininum Requirements"
          data={minimumRequirements!}
        />
        <RequirementsComponent
          title="Recommended Requirements"
          data={recommendedRequirements!}
        />
      </>
    </Box>
  );
};

export default ComputerRequirements;
