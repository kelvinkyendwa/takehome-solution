import { Typography } from "@mui/material";

interface props {
  title: string;
}

export const SubHeading = ({ title }: props) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: "1rem",
        fontWeight: "500",
        margin: "16px 0 0",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
};
