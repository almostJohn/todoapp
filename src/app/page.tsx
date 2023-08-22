import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { TodoListItem } from "@/components/ui/TodoListItem";
import { getAllTodo } from "@/functions/todos/getAllTodo";
import { toggleTodo } from "@/functions/todos/toggleTodo";

export default async function Page() {
	const todoLists = await getAllTodo();

	return (
		<>
			<Nav />
			<div className="container p-10">
				<h3 className="text-2xl font-light leading-none mb-5">
					This is your list of <span className="text-sky-500">todo</span>
				</h3>
				<ul className="pl-5">
					{todoLists.map((todo) => (
						<TodoListItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
					))}
				</ul>
			</div>
			<Footer />
		</>
	);
}
