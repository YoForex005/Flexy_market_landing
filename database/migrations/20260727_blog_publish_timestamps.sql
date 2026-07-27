BEGIN;

ALTER TABLE public.blogs
    ALTER COLUMN created_at SET DEFAULT CURRENT_TIMESTAMP,
    ALTER COLUMN updated_at SET DEFAULT CURRENT_TIMESTAMP;

CREATE OR REPLACE FUNCTION public.set_blog_publish_timestamps()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
    content_changed boolean;
BEGIN
    IF TG_OP = 'INSERT' THEN
        NEW.created_at := COALESCE(NEW.created_at, CURRENT_TIMESTAMP);
        NEW.updated_at := COALESCE(NEW.updated_at, CURRENT_TIMESTAMP);

        IF NEW.status = 'published' THEN
            NEW.published_at := COALESCE(NEW.published_at, CURRENT_TIMESTAMP);
        END IF;

        RETURN NEW;
    END IF;

    content_changed :=
        (to_jsonb(NEW) - 'created_at' - 'updated_at' - 'published_at' - 'views')
        IS DISTINCT FROM
        (to_jsonb(OLD) - 'created_at' - 'updated_at' - 'published_at' - 'views');

    IF content_changed THEN
        NEW.created_at := COALESCE(NEW.created_at, OLD.created_at, CURRENT_TIMESTAMP);
        NEW.updated_at := CURRENT_TIMESTAMP;

        IF NEW.status = 'published' THEN
            NEW.published_at := COALESCE(
                OLD.published_at,
                NEW.published_at,
                CURRENT_TIMESTAMP
            );
        END IF;
    ELSE
        -- View-count writes must not make an article look newly edited.
        NEW.created_at := OLD.created_at;
        NEW.updated_at := OLD.updated_at;
        NEW.published_at := OLD.published_at;
    END IF;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blogs_publish_timestamps ON public.blogs;

CREATE TRIGGER blogs_publish_timestamps
BEFORE INSERT OR UPDATE ON public.blogs
FOR EACH ROW
EXECUTE FUNCTION public.set_blog_publish_timestamps();

COMMIT;
