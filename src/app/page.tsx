import { TodoItem } from "@/components/list/TodoItem";
import { buttonVariants } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { SiTwitter as Twitter, SiGithub as GitHub } from "@icons-pack/react-simple-icons";

export default async function Page() {
	return (
		<div className="mx-auto max-w-2xl place-content-center flex min-h-screen flex-col py-8">
			<header className="container">
				<div className="flex items-center justify-between py-4">
					<a className="flex items-center space-x-2" href="/">
						<div className="flex flex-col space-y-1 text-sm leading-none">
							<span className="text-lg font-bold">todoapp</span>
							<span>create a note 📄</span>
						</div>
					</a>
					<div className="flex items-center space-x-2">
						<a
							href="https://twitter.com/almostJohn1"
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "default" })}
						>
							<Twitter />
						</a>
						<a
							href="https://github.com/almostJohn"
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "default" })}
						>
							<GitHub />
						</a>
						<ModeToggle />
					</div>
				</div>
			</header>
			<main className="flex-1">
				<div className="container flex flex-col space-y-2">
					<article className="pt-6">
						<div className="space-y-1 pb-4">
							<h2 className="font-mono text-lg tracking-tighter">todos</h2>
						</div>
						<TodoItem />
					</article>
				</div>
			</main>
		</div>
	);
}
