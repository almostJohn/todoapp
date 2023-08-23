"use server";

import { prisma } from "@/backend/prisma";

export async function deleteTodo(id: string) {
	await prisma.todoList.delete({
		where: { id },
		select: { title: true },
	});
}
