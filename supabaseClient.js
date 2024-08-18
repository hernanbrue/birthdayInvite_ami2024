const supabaseUrl = 'https://enezfmnbzteaqtyhxwlo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZXpmbW5ienRlYXF0eWh4d2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MjY1MDQsImV4cCI6MjAzOTUwMjUwNH0.Ico3lOlBqCoDf3a1MPKrUreRkQ6JdZn2q8hqSU_XkHQ';

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

export { supabaseClient };