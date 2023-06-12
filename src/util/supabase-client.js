import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://tiydthkdcirwgpbpudqm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpeWR0aGtkY2lyd2dwYnB1ZHFtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NTI0NDU3NCwiZXhwIjoyMDAwODIwNTc0fQ.PyHin1tMDZ_sO5PZOQl_6fSD_xbOigvZxereN-RV-o8'
)

export { supabase }
