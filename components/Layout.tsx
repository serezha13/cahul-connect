import Navbar from "@/components/Navbar";

export default function Layout({ children }) {

	return (
		<div className="min-h-screen flex flex-col">
			<div className="p-4">
				{children}
			</div>
			<Navbar />
		</div>
	)
}