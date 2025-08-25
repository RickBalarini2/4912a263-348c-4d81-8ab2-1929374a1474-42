-- Add new columns to dogs table for highlights and breeding status
ALTER TABLE public.dogs 
ADD COLUMN is_highlight BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN is_breeder BOOLEAN NOT NULL DEFAULT false;