// composables/useSupabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabase: SupabaseClient | null = null

export const useSupabase = () => {
  if (!supabase) {
    const config = useRuntimeConfig()
    supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)
  }
  return supabase
}
