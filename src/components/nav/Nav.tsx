import { FileIcon } from "lucide-react";

export function Nav() {
	return (
		<nav className="navbar p-6 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-200">
			<div className="flex-1">
				<h1 className="text-3xl font-bold leading-tight cursor-pointer">
					todoapp<span className="text-sky-500">.gg</span>
				</h1>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a href="/new-todo">
							<FileIcon /> New Todo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
