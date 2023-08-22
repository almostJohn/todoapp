import { prisma } from "@/prisma";

export async function getAllTodo() {
	return await prisma.todoList.findMany();
}
