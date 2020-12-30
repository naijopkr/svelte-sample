BEGIN;

    INSERT INTO products (ean, "name", "description", price) VALUES
        ('1234568732', 'PRODUCT #1', 'The fisrt product created', 99.99);

    INSERT INTO "batches" (code, product_ean, qty, delivery_date) VALUES
        ('BA-23420-1', '1234568732', 10, '2020-12-26');

END;
