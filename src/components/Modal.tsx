import { ReactNode } from "react";

type ModalProps = {
	modalOpen: boolean;
	setModalOpen(toggle: boolean): boolean | void;
	children: ReactNode;
};

export function Modal({ modalOpen, setModalOpen, children }: ModalProps) {
	return (
		<div className={`modal ${modalOpen ? "modal-open" : ""} bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-200`}>
			<div className="modal-box relative">
				<label onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
					✕
				</label>
				{children}
			</div>
		</div>
	);
}
