import { Box, Snackbar, Typography } from "@mui/material";
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
	const [studentReadingList, setStudentReadingList] = useState<Book[]>([]);
	const [filteredBooks, setFilteredBooks] = useState(books);
	const [showAlert, setShowAlert] = useState(false);
	const [showRemoveAlert, setShowRemoveAlert] = useState(false);

	const handleSearch = (books: Book[], searchTerm: string) => {
		return books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	};
	const addBookToReadingList = (book: Book) => {
		const updatedList = [...studentReadingList, book];
		const uniqueList = Array.from(
			new Set(updatedList.map((book) => book.title)),
		).map((title) => updatedList.find((book) => book.title === title));
		setStudentReadingList(
			uniqueList.filter((book): book is Book => book !== undefined),
		);
		setShowAlert(true);
	};

	const removeBookFromReadingList = (book: Book) => {
		const updatedList = studentReadingList.filter(
			(b) => b.title !== book.title,
		);
		setStudentReadingList(updatedList);
		setShowRemoveAlert(true);
	};

	useEffect(() => {
		const fBooks = handleSearch(books, searchTerm);
		setFilteredBooks(fBooks);
	}, [searchTerm, books, setFilteredBooks]);

	useEffect(() => {
		const idleTimeout = setTimeout(() => {
			setSearchTerm("");
		}, 300000);

		return () => {
			clearTimeout(idleTimeout);
		};
	}, [setSearchTerm]);

	return (
		<Box>
			<Snackbar
				open={showAlert}
				autoHideDuration={6000}
				onClose={() => setShowAlert(false)}
				message="Book added to reading list"
			/>
			<Snackbar
				open={showRemoveAlert}
				autoHideDuration={6000}
				color="warning"
				onClose={() => setShowRemoveAlert(false)}
				message="Book removed from reading list"
			/>
			<SearchBooks setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

			{searchTerm && (
				<SearchResults
					addBookToReadingList={addBookToReadingList}
					searchItems={filteredBooks}
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
			<BookList
				books={studentReadingList}
				removeBookFromReadingList={removeBookFromReadingList}
			/>
		</Box>
	);
};
