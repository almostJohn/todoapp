import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { getTodos } from "@/functions/todos/getTodos";
import { toggleTodo } from "@/functions/todos/toggleTodo";
import { TodoListItem } from "@/components/ui/TodoListItem";

export default async function Page() {
	const todoLists = await getTodos();

	return (
		<>
			<Nav />
			<div className="container p-10">
				<h3 className="text-2xl font-light leading-none mb-5">
					This is your list of <span className="text-sky-500">todo</span>
				</h3>
				<ul className="pl-5">
					{todoLists.map((todo) => (
						<TodoListItem key={todo.id} {...todo} execute={toggleTodo} />
					))}
				</ul>
			</div>
			<Footer />
		</>
	);
}
