import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const body = await req.json();
  const { name, price, description, image_url } = body;

  const { data, error } = await supabase
    .from("products")
    .insert([{ name, price, description, image_url }])
    .select();

  if (error) return Response.json({ error }, { status: 400 });

  return Response.json({ product: data[0] });
}

export async function GET() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) return Response.json({ error }, { status: 400 });

  return Response.json({ products: data });
}
