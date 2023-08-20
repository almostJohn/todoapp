"use client";

import { TaskInfo } from "types/Tasks";
import { FileEdit, Trash2 } from "lucide-react";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { editTodo, deleteTodo } from "api";

type TaskProp = {
	task: TaskInfo;
};

export function Task({ task }: TaskProp) {
	const router = useRouter();
	const [editTask, setEditTask] = useState<boolean>(false);
	const [deleteTask, setDeleteTask] = useState<boolean>(false);
	const [updatedTask, setUpdatedTask] = useState<string>(task.task);

	const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await editTodo({
			id: task.id,
			task: updatedTask,
		});
		setEditTask(false);
		router.refresh();
	};

	const handleDeleteTask = async (id: string) => {
		await deleteTodo(id);
		setDeleteTask(false);
		router.refresh();
	};

	return (
		<tr key={task.id}>
			<td className="w-full">{task.task}</td>
			<td className="flex gap-5">
				<FileEdit onClick={() => setEditTask(true)} className="text-sky-500 cursor-pointer hover:text-sky-300" />
				<Modal modalOpen={editTask} setModalOpen={setEditTask}>
					<form onSubmit={handleSubmitEditTodo}>
						<h3 className="font-bold text-lg">Edit task</h3>
						<div className="modal-action">
							<input
								value={updatedTask}
								onChange={(e) => setUpdatedTask(e.target.value)}
								type="text"
								placeholder="Type here"
								className="input input-bordered w-full max-w-full"
							/>
							<button className="btn btn-ghost" type="submit">
								Edit
							</button>
						</div>
					</form>
				</Modal>
				<Trash2 onClick={() => setDeleteTask(true)} className="text-red-500 cursor-pointer hover:text-red-300" />
				<Modal modalOpen={deleteTask} setModalOpen={setDeleteTask}>
					<h3 className="text-lg">Do you really want to delete this existing task?</h3>
					<div className="modal-action">
						<button onClick={() => handleDeleteTask(task.id)} className="btn btn-error">
							Confirm
						</button>
					</div>
				</Modal>
			</td>
		</tr>
	);
}
