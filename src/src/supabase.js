import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qhqfucaiquguhevxictb.supabase.co';

const SUPABASE_KEY = 'sb_publishable_o-dR5lD0o3QTJqL8wuxO4Q_DUVhWhuD';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
