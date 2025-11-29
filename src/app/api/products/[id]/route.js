import { supabase } from "@/lib/supabaseClient";

export async function GET(req, { params }) {
  const { id } = params;
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  return Response.json({ product: data });
}

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  const { data, error } = await supabase
    .from("products")
    .update(body)
    .eq("id", id)
    .select();

  return Response.json({ updated: data[0] });
}

export async function DELETE(req, { params }) {
  const { id } = params;

  const { error } = await supabase.from("products").delete().eq("id", id);

  return Response.json({ success: true });
}
