export type Mapper<T> = T;

export type Context = {
	prisma: import("@prisma/client").PrismaClient;
};

export type Nullable<T> = T | null;
