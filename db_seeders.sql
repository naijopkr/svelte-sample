BEGIN;

    INSERT INTO tv_shows (id, "name", "description", release_year) VALUES
        (1, 'Friends', 'The day a day of a group of 6 friends.', '1994'),
        (2, 'Modern Family', 'The day a day of 3 families', '2008');

    INSERT INTO "characters" ("name", tv_show_id) VALUES
        ('Chandler Bing', 1),
        ('Monica Geller', 1),
        ('Ross Geller', 1),
        ('Phoebe Buffay', 1),
        ('Joey Tribiani', 1),
        ('Rachel Green', 1),
        ('Phil Dunphy', 2),
        ('Claire Dunphy', 2),
        ('Haley Dunphy', 2),
        ('Alex Dunphy', 2),
        ('Luke Dunphy', 2),
        ('Mitchel Prichet', 2),
        ('Cameron Tucker', 2),
        ('Lily Pritchet-Tucker', 2),
        ('Jay Prichet', 2),
        ('Gloria Prichet', 2),
        ('Mani Delgado', 2),
        ('Joe Prichet', 2);

END;
