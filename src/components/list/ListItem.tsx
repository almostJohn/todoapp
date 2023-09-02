"use client";

import { useState, KeyboardEvent } from "react";
import { Trash2 } from "lucide-react";

type Item = {
	text: string;
	isDone: boolean;
};

export function ListItem() {
	const [items, setItems] = useState<Item[]>([]);

	const addItem = (text: string) => {
		setItems((prevItem) => [...prevItem, { text, isDone: false }]);
	};

	const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			const inputValue = event.currentTarget.value;
			addItem(inputValue);
			event.currentTarget.value = "";
		}
	};

	const toggleDone = (index: number) => {
		setItems((prevItems) =>
			prevItems.map((item, i) => {
				if (i === index) {
					return { ...item, isDone: !item.isDone };
				}

				return item;
			}),
		);
	};

	const removeItem = (index: number) => {
		setItems((prevItems) => prevItems.filter((_, i) => i !== index));
	};

	return (
		<>
			<input
				id="input-id"
				type="text"
				placeholder="Type here..."
				className="relative input input-bordered w-full text-[1em] mb-[10px]"
				onKeyUp={handleKeyUp}
			/>
			<ul className="relative mt-[10px] h-[350px] overflow-y-auto pr-[10px]">
				<div className="w-custom">
					{items.map((item, index) => (
						<li
							key={index}
							className={
								item.isDone
									? "relative flex items-center p-[10px] min-h-[45px] cursor-pointer line-through text-slate-400"
									: "relative flex items-center p-[10px] min-h-[45px] cursor-pointer"
							}
							onClick={() => toggleDone(index)}
						>
							{item.text}
							<i
								onClick={() => removeItem(index)}
								className="absolute flex items-center justify-center w-[30px] h-[30px] right-[-40px]"
							>
								<Trash2 className="hover:text-red-500" />
							</i>
						</li>
					))}
				</div>
			</ul>
		</>
	);
}
