import {
	Paper,
	List,
	ListItem,
	ButtonBase,
	Typography,
	Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Book } from "../../types/types";

interface Props {
	searchItems: Book[];
	addBookToReadingList: (book: Book) => void;
}
export const SearchResults = ({ searchItems, addBookToReadingList }: Props) => {
	return (
		<Paper
			sx={{
				height: "300px",
				zIndex: 100,
				width: "100%",
				overflowY: "scroll",
				position: "relative",
				marginTop: "10px",
				paddingX: 2,
			}}
		>
			<List sx={{ position: "absolute" }}>
				{searchItems.map((book, index) => (
					<ListItem key={index}>
						<Grid
							container
							sx={{ width: "100%" }}
							direction="row"
							alignItems="center"
							spacing={2}
						>
							<Grid>
								<img src={book.coverPhotoURL} alt={book.title} width={90} />
							</Grid>
							<Grid>
								<Stack spacing={1}>
									<Typography sx={{ width: "100%" }}>{book.title}</Typography>
									<Typography
										sx={{
											width: "100%",
											fontSize: "0.812rem",
											color: "#9da9aa",
											fontStyle: "normal",
										}}
									>
										by {book.author}
									</Typography>
								</Stack>
							</Grid>
							<Grid>
								<ButtonBase
									onClick={() => addBookToReadingList(book)}
									sx={{
										backgroundColor: "#5ACCCC",
										borderRadius: "15px",
										height: "30px",
										paddingX: "15px",
										paddingY: "5px",
										fontWeight: 600,
										color: "#fff",
									}}
								>
									Add
								</ButtonBase>
							</Grid>
						</Grid>
					</ListItem>
				))}
			</List>
		</Paper>
	);
};
