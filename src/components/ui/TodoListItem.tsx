"use client";

import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { FileEdit, Trash2 } from "lucide-react";
import { TodoListModal } from "./TodoListModal";
import { deleteTodo } from "@/functions/todos/deleteTodo";
import { upsertTodo } from "@/functions/todos/upsertTodo";

type TodoListItemProps = {
	id: string;
	title: string;
	completed: boolean;
	execute(id: string, completed: boolean): void | Promise<void>;
};

export function TodoListItem({ id, title, completed, execute }: TodoListItemProps) {
	const router = useRouter();
	const [toDelete, setToDelete] = useState<boolean>(false);
	const [toUpdate, setToUpdate] = useState<boolean>(false);
	const [newTitle, setNewTitle] = useState<string>(title);

	const handleDelete = async (id: string) => {
		await deleteTodo(id);
		setToDelete(false);
		router.refresh();
	};

	const handleUpdate: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await upsertTodo(id, newTitle);
		setToUpdate(false);
		router.refresh();
	};

	return (
		<li className="flex gap-5 items-center">
			<input
				type="checkbox"
				id={id}
				className="checkbox peer"
				defaultChecked={completed}
				onChange={(e) => execute(id, e.target.checked)}
			/>
			<FileEdit onClick={() => setToUpdate(true)} className="cursor-pointer text-sky-500 hover:text-sky-300" />
			<TodoListModal isOpen={toUpdate} execute={setToUpdate}>
				<form onSubmit={handleUpdate}>
					<h3 className="text-lg">Edit todo</h3>
					<div className="modal-action">
						<input
							type="text"
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
							placeholder="Your new todo"
							className="input input-bordered w-full max-w-full"
						/>
						<button className="btn btn-ghost" type="submit">
							Edit
						</button>
					</div>
				</form>
			</TodoListModal>
			<Trash2 onClick={() => setToDelete(true)} className="cursor-pointer text-red-500 hover:text-red-300" />
			<TodoListModal isOpen={toDelete} execute={setToDelete}>
				<h3 className="text-lg">
					Do you really want to delete this todo?
					<br />
					<span className="text-red-500">This action is irreversible!</span>
				</h3>
				<div className="modal-action">
					<button onClick={() => handleDelete(id)} className="btn btn-error">
						Delete
					</button>
				</div>
			</TodoListModal>
			<label htmlFor={id} className="cursor-pointer text-xl peer-checked:line-through peer-checked:text-slate-500">
				{title}
			</label>
		</li>
	);
}
