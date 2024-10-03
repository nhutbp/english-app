import { prisma } from "./prismaClient";

class UserService {
	async loadUsers() {
		return await prisma.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
	}

	async find(email: string) {
		return await prisma.user.findUnique({
			where: { email },
		});
	}

	async create(name: string, email: string) {
		return await prisma.user.create({
			data: { name, email },
		});
	}

	async deleteUser(id: number) {
		return await prisma.user.delete({
			where: { id },
		});
	}
}

export const userService = new UserService();
