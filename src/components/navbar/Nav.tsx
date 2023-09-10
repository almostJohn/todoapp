import { Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
	return (
		<div className="navbar mx-auto p-4">
			<div className="flex-1">
				<div className="tooltip tooltip-bottom" data-tip="Home">
					<Link className="btn btn-ghost normal-case text-xl" href="/" aria-label="Home">
						<Image src="/favicon.png" width={32} height={32} alt="todoapp" /> Todo
					</Link>
				</div>
			</div>
			<div className="flex-none">
				<div className="tooltip tooltip-bottom" data-tip="Source Code">
					<Link
						className="btn btn-ghost btn-square normal-case font-normal w-full ml-2 px-2 py-2 items-center"
						aria-label="Source Code"
						rel="external noopener noreferrer"
						target="_blank"
						href="https://github.com/almostJohn/todoapp"
					>
						Source Code <Code2 />
					</Link>
				</div>
			</div>
		</div>
	);
}
