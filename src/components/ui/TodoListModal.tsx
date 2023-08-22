import { ReactNode } from "react";

type TodoListModal = {
	isOpen: boolean;
	setModalOpen(toggle: boolean): void | boolean;
	children: ReactNode;
};

export function TodoListModal({ isOpen, setModalOpen, children }: TodoListModal) {
	return (
		<div className={`modal ${isOpen ? "modal-open" : ""} text-neutral-900 dark:text-neutral-200`}>
			<div className="modal-box relative">
				<label onClick={() => setModalOpen(false)} className="btn btn-ghost btn-circle btn-sm absolute right-2 top-2">
					✕
				</label>
				{children}
			</div>
		</div>
	);
}
