import { ListItem } from "@/components/list/ListItem";
import { Footer } from "@/components/footer/Footer";

export default async function Page() {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
				<div className="relative w-[450px] h-[550px] px-[30px] bg-transparent">
					<h1 className="text-3xl w-full font-bold leading-tight text-center mb-[15px] cursor-pointer">
						todoapp<span className="text-sky-500">.gg</span>
					</h1>
					<ListItem />
				</div>
			</div>
			<Footer />
		</>
	);
}
