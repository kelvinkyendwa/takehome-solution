import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
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
								borderRadius: "15px",
								objectFit: "cover",
							}}
						/>
						<Stack spacing={1}>
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
									fontSize: "0.812rem",
									color: "#9da9aa",
									fontStyle: "normal",
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
							<Chip
								label="Remove"
								color="warning"
								sx={{
									padding: "5px",
									marginTop: "10px",
								}}
								onClick={() => removeBookFromReadingList(book)}
							/>
						</Stack>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};
