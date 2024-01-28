import supabase, { supabaseUrl } from "./supabase.js";

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins can not be loaded");
  }
  return data;
}

async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("cabins") //къде
    .delete() // какво
    .eq("id", id); // което е равно на ...

  if (error) {
    console.error(error);
    throw new Error("Cabins can not be deleted");
  }
  return data;
}

async function createCabin(newCabin) {
  // create unique name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // get the path of bucket
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 01.Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins can not be created");
  }

  // 02.upload image only if there is no error

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // If error uploading file delete cabin data in table
  if (storageError) await supabase.from("cabins").delete().eq("id", data.id);
  if (storageError) {
    console.error(storageError);
    throw new Error(
      "Cabin image can not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export { getCabins, deleteCabin, createCabin };
