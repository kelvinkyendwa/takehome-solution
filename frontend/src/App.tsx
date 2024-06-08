import "./App.css";

import { Box, Container } from "@mui/material";
import { Books } from "./components/Books/Books";
import { HeadingSection } from "./components/HeadingSection/HeadingSection";
import { useEffect, useState } from "react";

function App() {
	const [allBooks, setAllBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch("http://localhost:4000/graphql", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
            query {
              books {
                author
                coverPhotoURL
                readingLevel
                title
              }
            }
          `,
				}),
			});

			const { data } = await response.json();

			if (data) {
				setAllBooks(data.books);
			}
		};

		fetchBooks();
	}, []);
	return (
		<Container>
			<Box
				sx={{
					maxWidth: "1200px",
					px: 8,
				}}
			>
				<HeadingSection />
				<Books books={allBooks} />
			</Box>
		</Container>
	);
}

export default App;
