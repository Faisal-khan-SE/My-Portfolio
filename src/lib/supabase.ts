import { createClient } from '@supabase/supabase-js';

const isPlaceholder = (val: string | undefined) => !val || val.includes('your_supabase_');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValid = !isPlaceholder(supabaseUrl) && !isPlaceholder(supabaseAnonKey);

if (!isValid) {
    console.warn('Supabase credentials missing or invalid. Contact form will not submit.');
}

// Safer initialization: don't call createClient if it will definitely fail
export const supabase = isValid
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            insert: async () => ({ error: new Error('Supabase not configured. Please add your credentials to the .env file.') })
        })
    } as any;
