import { prisma } from "@/prisma";
import { redirect } from "next/navigation";

export async function createTodo(data: FormData) {
	"use server";

	const title = data.get("title")!.valueOf();

	if (typeof title !== "string" || (title.length >= 500 && title.length === 0)) {
		throw new Error("Invalid title provided");
	}

	await prisma.todoList.create({
		data: {
			title,
			completed: false,
		},
	});
	redirect("/");
}
