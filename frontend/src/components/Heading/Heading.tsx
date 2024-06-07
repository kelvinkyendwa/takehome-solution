import { Typography } from "@mui/material";

interface props {
  title: string;
}

export const Heading = ({ title }: props) => {
  return (
		<Typography
			variant="body1"
			sx={{
				fontSize: "2.25rem",
				fontWeight: "800",
				margin: "16px 0 0",
				paddingTop: "16px",
				color: "#335C6E",
				textAlign: "center",
			}}
		>
			{title}
		</Typography>
	);
};
