CREATE TABLE "Users" (
	"id" serial NOT NULL,
	"login" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"role" int NOT NULL,
	"is_active" BOOLEAN NOT NULL DEFAULT 'true',
	"created_at" TIMESTAMP NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Products" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"price" float4 NOT NULL,
	"category_id" int NOT NULL,
	CONSTRAINT "Products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Product_params" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "Product_params_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Product_params_values" (
	"id" serial NOT NULL,
	"product_id" int NOT NULL,
	"product_param_id" int NOT NULL,
	"value" TEXT NOT NULL,
	CONSTRAINT "Product_params_values_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Orders" (
	"id" serial NOT NULL,
	"relations" TEXT NOT NULL,
	"user_id" int NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	CONSTRAINT "Orders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Categories" (
	"id" serial NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "Categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Order_relations" (
	"id" serial NOT NULL,
	"product_id" int NOT NULL,
	"count" int NOT NULL DEFAULT '1',
	CONSTRAINT "Order_relations_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
