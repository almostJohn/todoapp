import { TodoItem } from "@/components/list/TodoItem";
import { Nav } from "@/components/navbar/Nav";
import { Footer } from "@/components/footer/Footer";

export default async function Page() {
	return (
		<>
			<Nav />
			<ul className="p-4">
				<TodoItem />
			</ul>
			<Footer />
		</>
	);
}
