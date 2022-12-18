import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lobbnshrfrwpuwkzvslp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvYmJuc2hyZnJ3cHV3a3p2c2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNjY5NTksImV4cCI6MTk4Njk0Mjk1OX0.0No-viDu73CQ2XgEXzq9L9uVI99sP5jOw0BK34bIgcU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
