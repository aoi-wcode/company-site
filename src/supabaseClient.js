import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dngiwqxamqftnanqkpgq.supabase.co";
const supabaseKey = "sb_publishable_IpxHRc1z9SsaWO7TG1E6sg_cBWKuh4c";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);