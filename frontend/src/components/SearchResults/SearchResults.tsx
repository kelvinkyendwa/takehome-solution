import { Paper, List, ListItem } from "@mui/material";
import { Book } from "../../types/types";

interface Props {
	searchItems: Book[];
	setStudentList: React.Dispatch<React.SetStateAction<Book[]>>;
	studentList: Book[];
}
export const SearchResults = ({
	searchItems,
	setStudentList,
	studentList,
}: Props) => {
	return (
		<Paper>
			<List>
				{searchItems.map((book, index) => (
					<ListItem key={index}>
						{book.title}
						<button
							onClick={() => {
								const updatedList = [...studentList, book];
								const uniqueList = Array.from(
									new Set(updatedList.map((book) => book.title)),
								).map((title) =>
									updatedList.find((book) => book.title === title),
								);
								setStudentList(
									uniqueList.filter((book): book is Book => book !== undefined),
								);
							}}
						>
							Add
						</button>
					</ListItem>
				))}
			</List>
		</Paper>
	);
};
