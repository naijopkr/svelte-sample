BEGIN;

    CREATE TABLE IF NOT EXISTS products (
        id  SERIAL PRIMARY KEY,
        ean VARCHAR(13) NOT NULL UNIQUE,
        "name" VARCHAR(255) NOT NULL,
        "description" TEXT,
        price FLOAT NOT NULL,
        in_stock INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE
    );

    CREATE TABLE IF NOT EXISTS "batches" (
        id SERIAL PRIMARY KEY,
        code VARCHAR(20) NOT NULL,
        product_ean VARCHAR(13) NOT NULL,
        qty INTEGER NOT NULL,
        delivery_date DATE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE,
        CONSTRAINT fk_product
            FOREIGN KEY(product_ean) REFERENCES products(ean),
        UNIQUE (code, product_ean)
    );

END;
