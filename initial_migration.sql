BEGIN;

    CREATE TABLE products (
        id  SERIAL PRIMARY KEY,
        ean VARCHAR(13) NOT NULL UNIQUE,
        "name" VARCHAR(255) NOT NULL,
        "description" TEXT,
        price FLOAT NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP WITH TIME ZONE
    );

END;
