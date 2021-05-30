CREATE TABLE "toDoList" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (100) NOT NULL,
	"completed" VARCHAR (7) DEFAULT 'Not yet');