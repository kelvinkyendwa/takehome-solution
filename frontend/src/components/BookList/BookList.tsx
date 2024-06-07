import { Box, Grid, Typography } from "@mui/material";
import { Book } from "../../types/types";

interface Props {
	books: Book[];
}
export const BookList = ({ books }: Props) => {
	return (
		<Grid container spacing={2}>
			{books.map((book, index) => (
				<Grid item key={index}>
					<Box sx={{ width: "200px" }}>
						<img
							src={book.coverPhotoURL}
							alt={book.title}
							width={200}
							height={200}
							style={{
								borderRadius: "5px",
								objectFit: "cover",
								boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
							}}
						/>
						<Typography
							variant="body1"
							sx={{
								fontWeight: 700,
								color: "#2c3232",
								fontSize: "1rem",
							}}
						>
							{book.title}
						</Typography>
						<Typography
							variant="body1"
							sx={{
								fontSize: 13,
								color: "#9da9aa",
								fontWeight: 500,
							}}
						>
							by {book.author}
						</Typography>
						<Typography variant="body1">{book.readingLevel}</Typography>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};
