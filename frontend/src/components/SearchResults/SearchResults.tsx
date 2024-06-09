import {
	Paper,
	List,
	ListItem,
	ButtonBase,
	Typography,
	Box,
} from "@mui/material";
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
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								padding: "10px",
								width: "100%",
							}}
						>
							<img src={book.coverPhotoURL} alt={book.title} width={90} />
							<Typography sx={{ width: "100%", paddingX: 5 }}>
								{book.title}
							</Typography>
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
						</Box>
					</ListItem>
				))}
			</List>
		</Paper>
	);
};
