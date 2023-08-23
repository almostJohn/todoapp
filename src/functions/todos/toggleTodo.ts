import { prisma } from "@/backend/prisma";

export async function toggleTodo(id: string, completed: boolean) {
	"use server";

	await prisma.todoList.update({
		where: { id },
		data: {
			completed,
		},
	});
}
