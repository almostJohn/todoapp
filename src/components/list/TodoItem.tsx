"use client";

import { useState, KeyboardEvent } from "react";
import { nanoid } from "nanoid";
import type { Todo } from "@/types/Todo";
import { LucideTrash2 } from "lucide-react";

export function TodoItem() {
	const [items, setItems] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		setItems((prevItem) => [...prevItem, { id: nanoid(), text, isDone: false }]);
	};

	const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		event.preventDefault();

		if (event.key === "Enter") {
			const inputValue = event.currentTarget.value;
			addTodo(inputValue);
			event.currentTarget.value = "";
		}
	};

	const toggleLineThrough = (id: string) => {
		setItems((prevItems) =>
			prevItems.map((item, _) => {
				if (item.id === id) {
					return { ...item, isDone: !item.isDone };
				}

				return item;
			}),
		);
	};

	const removeTodo = (id: string) => {
		setItems((prevItems) => prevItems.filter((item, _) => item.id !== id));
	};

	return (
		<>
			<input
				id={nanoid()}
				type="text"
				placeholder="Write your todo..."
				className="relative input input-bordered w-full max-w-full"
				onKeyUp={handleKeyUp}
			/>
			<ul className="relative mt-[10px] h-[350px] overflow-y-auto pr-[10px]">
				<div className="w-custom">
					{items.map((item, _) => (
						<li
							key={item.id}
							className={
								item.isDone
									? "relative flex items-center p-[10px] min-h-[45px] cursor-pointer line-through text-slate-500"
									: "relative flex items-center p-[10px] min-h-[45px] cursor-pointer"
							}
							onClick={() => toggleLineThrough(item.id)}
						>
							{item.text}
							<i
								className="absolute flex items-center justify-center w-[30px] h-[30px] right-[-40px]"
								onClick={() => removeTodo(item.id)}
							>
								<LucideTrash2 className="text-red-700 hover:text-red-500" />
							</i>
						</li>
					))}
				</div>
			</ul>
		</>
	);
}
