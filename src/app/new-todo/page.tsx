import { ArrowLeft } from "lucide-react";
import { createTodo } from "@/functions/todos/createTodo";

export default function Page() {
	return (
		<>
			<nav className="navbar p-6 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-200">
				<div className="flex-1">
					<h1 className="text-3xl font-bold leading-tight cursor-pointer">
						todoapp<span className="text-sky-500">.gg</span>
					</h1>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a href="/">
								<ArrowLeft /> Go Back
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container p-10">
				<h3 className="text-2xl font-light leading-none mb-4">
					Create your <span className="text-sky-500">todo</span>
				</h3>
				<form action={createTodo}>
					<input
						type="text"
						name="title"
						placeholder="Type here"
						className="input input-bordered w-full max-w-full p-3 text-neutral-900 dark:text-neutral-200"
					/>
					<div className="flex gap-2 justify-end">
						<button className="btn btn-ghost mt-4" type="submit">
							Create
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
