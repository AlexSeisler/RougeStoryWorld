/*
  # Create subscribers table

  1. New Tables
    - `subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `source` (text) - Where the subscriber signed up from
      - `active` (boolean) - Whether the subscriber is active

  2. Security
    - Enable RLS on `subscribers` table
    - Add policy for inserting new subscribers
    - Add policy for authenticated users to read subscribers
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  source text DEFAULT 'popup',
  active boolean DEFAULT true
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new subscribers
CREATE POLICY "Anyone can subscribe" ON subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Authenticated users can view subscribers" ON subscribers
  FOR SELECT
  TO authenticated
  USING (true);