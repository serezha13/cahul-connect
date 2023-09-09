import Navbar from "@/components/Navbar";

export default function Layout({ children }) {

	return (
		<div>
			<Navbar />
			<div className="p-4">
				{children}
			</div>
		</div>
	)
}