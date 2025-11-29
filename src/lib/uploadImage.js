import { supabase } from "./supabaseClient";

export async function uploadImage(file) {
  if (!file) return null;

  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("product-images")
    .upload(`products/${fileName}`, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.log("Upload error:", error);
    return null;
  }

  const publicUrl = supabase.storage
    .from("product-images")
    .getPublicUrl(`products/${fileName}`);

  return publicUrl.data.publicUrl;
}
