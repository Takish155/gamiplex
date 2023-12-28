import { FetchGameInfoType } from "@/types/getGameInfoType";
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";
import React from "react";
import Typography from "@mui/material/Typography";

const gameDescriptionHeadingStyle = {
  fontSize: "1.875rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
};

const gameDescriptionParagraphStyle = {
  fontSize: "1.125rem",
  marginBottom: "1.5rem",
  margin: "0 auto",
};

const GameDescription = async ({ data }: { data: FetchGameInfoType }) => {
  const sanitizeDescription: string = sanitizeHtml(
    data.response.gameInfoResponse.description
  );

  if (sanitizeDescription.length === 0 || !sanitizeDescription) {
    return <p>There is no description for this game.</p>;
  }
  const paragraphs = sanitizeDescription.split(/<\/?p>/);
  if (paragraphs.length === 1) {
    paragraphs.unshift("<p>");
  }
  const englishOnly = paragraphs[1].replaceAll(".", ".<br />");

  return (
    <>
      <Typography variant="h2" sx={gameDescriptionHeadingStyle}>
        Details
      </Typography>
      <Typography variant="body1" sx={gameDescriptionParagraphStyle}>
        {parse(`${englishOnly}`)}
      </Typography>
    </>
  );
};

export default GameDescription;
