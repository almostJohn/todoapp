"use client";

import { useState, KeyboardEvent } from "react";
import { nanoid } from "nanoid";
import type { Todo } from "@/types/Todo";
import { LucideTrash2 } from "lucide-react";
import { Input } from "../ui/input";
import { buttonVariants } from "../ui/Button";

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
			<Input type="text" placeholder="Write your todo..." onKeyUp={handleKeyUp} />
			<ul className="space-y-4 py-4">
				{items.map((item) => (
					<li
						key={item.id}
						className={
							item.isDone
								? "relative flex items-center p-[10px] min-h-[45px] cursor-pointer line-through text-muted-foreground"
								: "relative flex items-center p-[10px] min-h-[45px] cursor-pointer"
						}
						onClick={() => toggleLineThrough(item.id)}
					>
						{item.text}
						<button
							className={buttonVariants({
								variant: "default",
								className: "absolute flex items-center justify-center w-[30px] h-[30px] right-[-5px]",
							})}
							onClick={() => removeTodo(item.id)}
						>
							<LucideTrash2 className="text-red-500" />
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
