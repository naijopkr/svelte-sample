BEGIN;

    CREATE TABLE IF NOT EXISTS tv_shows (
        id  SERIAL PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "description" TEXT,
        release_year VARCHAR(4),
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE
    );

    CREATE TABLE IF NOT EXISTS "characters" (
        id SERIAL PRIMARY KEY,
        "name" VARCHAR(255) NOT NULL,
        "tv_show_id" INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        updated_at TIMESTAMP WITH TIME ZONE,
        CONSTRAINT fk_tv_show
            FOREIGN KEY(tv_show_id) REFERENCES tv_shows(id)
    );

END;
