import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ocsohfbffnwdfktutntf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jc29oZmJmZm53ZGZrdHV0bnRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MjI1MzYsImV4cCI6MjAyMTk5ODUzNn0.JVqKp09fefcmtnkgpCPApzAoXPl7Q-Bg4jfQDnWSgJQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
