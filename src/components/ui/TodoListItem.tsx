"use client";

import { Trash2, FileEdit } from "lucide-react";
import { FormEventHandler, useState } from "react";
import { toggleDelete } from "@/functions/todos/toggleDelete";
import { updateTodo } from "@/functions/todos/updateTodo";
import { useRouter } from "next/navigation";
import { TodoListModal } from "./TodoListModal";

type TodoListItemProps = {
	id: string;
	title: string;
	completed: boolean;
	toggleTodo(id: string, completed: boolean): void | Promise<void>;
};

export function TodoListItem({ id, title, completed, toggleTodo }: TodoListItemProps) {
	const router = useRouter();
	const [deleteTask, setDeleteTask] = useState<boolean>(false);
	const [updateTask, setUpdateTask] = useState<boolean>(false);
	const [updatedTitle, setUpdatedTitle] = useState<string>(title);

	const handleDeleteTask = async (id: string) => {
		await toggleDelete(id);
		setDeleteTask(false);
		router.refresh();
	};

	const handleEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await updateTodo(id, updatedTitle);
		setUpdateTask(false);
		router.refresh();
	};

	return (
		<li className="flex gap-5 items-center">
			<input
				id={id}
				type="checkbox"
				className="checkbox peer"
				defaultChecked={completed}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<FileEdit onClick={() => setUpdateTask(true)} className="cursor-pointer text-sky-500 hover:text-sky-300" />
			<TodoListModal isOpen={updateTask} setModalOpen={setUpdateTask}>
				<form onSubmit={handleEditTask}>
					<h3 className="text-lg font-bold">Edit todo</h3>
					<div className="modal-action">
						<input
							type="text"
							value={updatedTitle}
							onChange={(e) => setUpdatedTitle(e.target.value)}
							placeholder="Type here"
							className="input input-bordered w-full max-w-full"
						/>
						<button className="btn btn-ghost" type="submit">
							Edit
						</button>
					</div>
				</form>
			</TodoListModal>
			<Trash2 onClick={() => setDeleteTask(true)} className="cursor-pointer text-red-500 hover:text-red-300" />
			<TodoListModal isOpen={deleteTask} setModalOpen={setDeleteTask}>
				<h3 className="text-lg">
					Do you really want to delete this todo?
					<br />
					<span className="text-red-500">This action is irreversible!</span>
				</h3>
				<div className="modal-action">
					<button onClick={() => handleDeleteTask(id)} className="btn btn-error">
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
