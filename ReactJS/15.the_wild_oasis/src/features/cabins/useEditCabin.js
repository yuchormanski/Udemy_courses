import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      //   reset();
      //   toggleShowForm();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isEditing, editCabin };
}
