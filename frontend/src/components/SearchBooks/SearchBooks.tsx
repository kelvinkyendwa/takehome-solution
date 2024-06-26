import { Box, TextField } from "@mui/material";

interface Props {
	setSearchTerm: (value: string) => void;
	searchTerm: string;
}

export const SearchBooks = ({ setSearchTerm, searchTerm }: Props) => {
	return (
		<Box sx={{ marginY: 2 }}>
			<TextField
				variant="outlined"
				placeholder="Book..."
				value={searchTerm}
				fullWidth
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</Box>
	);
};
