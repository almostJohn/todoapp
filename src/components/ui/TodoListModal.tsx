import { ReactNode } from "react";

type TodoListModal = {
	isOpen: boolean;
	execute(toggle: boolean): void | Promise<void>;
	children: ReactNode;
};

export function TodoListModal({ isOpen, execute, children }: TodoListModal) {
	return (
		<div className={`modal ${isOpen ? "modal-open" : ""} text-neutral-900 dark:text-neutral-200`}>
			<div className="modal-box relative">
				<label onClick={() => execute(false)} className="btn btn-ghost btn-circle btn-sm absolute right-2 top-2">
					✕
				</label>
				{children}
			</div>
		</div>
	);
}
