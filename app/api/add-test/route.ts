import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client (Use Service Role Key only in server-side)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ Never expose this key on the client side
);

export async function POST(req: Request) {
  try {
    const { template_id, email } = await req.json(); // Read parameters from request

    // Insert data into the database
    const { data, error } = await supabase
      .from("phishing_test") // Replace with your table template_id
      .insert([{ template_id, email }]);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
