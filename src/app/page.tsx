import { AddTask } from "~/components/AddTask";
import { TodoList } from "~/components/TodoList";
import { Nav } from "~/components/nav/Nav";
import { getAllTodos } from "../../api";

export default async function Page() {
	const tasks = await getAllTodos();

	return (
		<>
			<Nav />
			<main className="max-w-4xl mx-auto">
				<div className="text-center flex flex-col gap-4">
					<AddTask />
				</div>
				<TodoList tasks={tasks} />
			</main>
		</>
	);
}
