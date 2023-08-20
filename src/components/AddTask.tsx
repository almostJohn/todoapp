"use client";

import { SiAddthis } from "@icons-pack/react-simple-icons";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export function AddTask() {
	const router = useRouter();
	const [openTask, setOpenTask] = useState<boolean>(false);
	const [newTaskValue, setNewTaskValue] = useState<string>("");

	const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await addTodo({
			id: uuidv4(),
			task: newTaskValue,
		});
		setNewTaskValue("");
		setOpenTask(false);
		router.refresh();
	};

	return (
		<div>
			<button onClick={() => setOpenTask(true)} className="btn btn-ghost">
				Add New Task <SiAddthis className="ml-2" />
			</button>

			<Modal modalOpen={openTask} setModalOpen={setOpenTask}>
				<form onSubmit={handleSubmitNewTodo}>
					<h3 className="font-bold text-lg">Add new task</h3>
					<div className="modal-action">
						<input
							value={newTaskValue}
							onChange={(e) => setNewTaskValue(e.target.value)}
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-full"
						/>
						<button className="btn btn-ghost" type="submit">
							Add
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}
