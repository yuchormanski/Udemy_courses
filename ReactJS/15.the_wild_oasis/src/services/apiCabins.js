import supabase from "./supabase.js";

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

export { getCabins, deleteCabin };
