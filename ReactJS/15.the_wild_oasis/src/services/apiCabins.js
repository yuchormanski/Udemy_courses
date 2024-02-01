import supabase, { supabaseUrl } from "./supabase.js";

// GET ALL CABINs

async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins can not be loaded");
  }
  return data;
}

// DELETE CABIN

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

// CREATE CABIN

async function createEditCabin(newCabin, id) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl); // мисля , че е грешно
  // const hasImage = newCabin.image?.startsWith(supabaseUrl);

  // create unique name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // get the path of bucket
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // 01.Create cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // Edit cabin
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins can not be created");
  }

  // 02.upload image only if there is no error

  // if (imagePath) {
  //   console.log(imagePath);
  //   return data;
  // }

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

export { getCabins, deleteCabin, createEditCabin };
