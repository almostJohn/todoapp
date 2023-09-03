"use client";

export default function Error({ error }: { error: Error }) {
	console.error(error);

	return (
		<div className="flex flex-col justify-center items-center h-[100vh]">
			<h1 className="text-[6em] m-0">500</h1>
			<p className="text-[1.5em] text-center m-0 mt-[20px] mb-5">Error.</p>
		</div>
	);
}
