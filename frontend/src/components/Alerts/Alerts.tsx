// Alerts.tsx
import { Snackbar } from "@mui/material";

interface Props {
	showAlert: boolean;
	showRemoveAlert: boolean;
	setShowAlert: (show: boolean) => void;
	setShowRemoveAlert: (show: boolean) => void;
}

const Alerts = ({
	showAlert,
	showRemoveAlert,
	setShowAlert,
	setShowRemoveAlert,
}: Props) => {
	return (
		<>
			<Snackbar
				open={showAlert}
				autoHideDuration={6000}
				onClose={() => setShowAlert(false)}
				message="Book added to reading list"
			/>
			<Snackbar
				open={showRemoveAlert}
				autoHideDuration={6000}
				onClose={() => setShowRemoveAlert(false)}
				message="Book removed from reading list"
			/>
		</>
	);
};

export default Alerts;
