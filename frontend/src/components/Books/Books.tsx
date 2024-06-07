import { Box, Typography } from "@mui/material";
import { SearchBooks } from "../SearchBooks/SearchBooks";
import { useEffect, useState } from "react";
import { BookList } from "../BookList/BookList";
import { Book } from "../../types/types";
import { SearchResults } from "../SearchResults/SearchResults";

interface Props {
	books: Book[];
}
export const Books = ({ books }: Props) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [studentList, setStudentList] = useState<Book[]>([]);
	const [filteredBooks, setFilteredBooks] = useState(books);

	const handleSearch = (books: Book[], searchTerm: string) => {
		return books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	};

	useEffect(() => {
		const fBooks = handleSearch(books, searchTerm);
		setFilteredBooks(fBooks);
	}, [searchTerm, books, setFilteredBooks]);

	return (
		<Box>
			<SearchBooks setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
			{searchTerm && (
				<SearchResults
					studentList={studentList}
					searchItems={filteredBooks}
					setStudentList={setStudentList}
				/>
			)}
			<Typography
				variant="body1"
				sx={{
					fontSize: "1.625rem",
					fontWeight: "500",
					margin: "16px 0 0",
					color: "#335C6E",
				}}
			>
				Reading List
			</Typography>
			<BookList books={studentList} />
		</Box>
	);
};
