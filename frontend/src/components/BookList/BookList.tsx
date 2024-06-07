import { Box, ButtonBase, Grid, Typography } from "@mui/material";
import { Book } from "../../types/types";

interface Props {
	books: Book[];
	removeBookFromReadingList: (book: Book) => void;
}
export const BookList = ({ books, removeBookFromReadingList }: Props) => {
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
						<Typography
							variant="body1"
							sx={{ fontSize: "10px", fontWeight: 800 }}
						>
							LEVEL - {book.readingLevel}
						</Typography>

						<ButtonBase
							sx={{
								backgroundColor: "#f76434",
								color: "#fff",
								borderRadius: "15px",
								padding: "5px 10px",
								marginTop: "10px",
								fontSize: "0.875rem",
							}}
							onClick={() => removeBookFromReadingList(book)}
						>
							Remove
						</ButtonBase>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};
