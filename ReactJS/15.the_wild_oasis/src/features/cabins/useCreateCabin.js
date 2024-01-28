import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      //   reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createCabin };
}
