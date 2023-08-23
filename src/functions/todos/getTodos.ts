import { prisma } from "@/backend/prisma";

export async function getTodos() {
	return await prisma.todoList.findMany();
}
