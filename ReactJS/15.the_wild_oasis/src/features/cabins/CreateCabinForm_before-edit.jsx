import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";

function CreateCabinForm() {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const {
    isLoading: isCreating,
    mutate,
    status,
  } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onFormSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onErrorSubmit(errors) {
    console.log(errors);
    Object.keys(errors).forEach((error) => toast.error(errors[error].message));
  }

  return (
    <Form onSubmit={handleSubmit(onFormSubmit, onErrorSubmit)}>
      {/* <FormRow label="Cabin name" error={errors?.name?.message}> */}
      <FormRow label="Cabin name">
        <Input
          disabled={isCreating}
          type="text"
          id="name"
          {...register("name", { required: "Cabin name is required" })}
        />
      </FormRow>

      {/* <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}> */}
      <FormRow label="Maximum capacity">
        <Input
          disabled={isCreating}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: { value: 1, message: "Maximum capacity should be at least 1" },
          })}
        />
      </FormRow>

      {/* <FormRow label="Regular price" error={errors?.regularPrice?.message}> */}
      <FormRow label="Regular price">
        <Input
          disabled={isCreating}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Price is required",
            min: { value: 1, message: "Price should be at least 1" },
          })}
        />
      </FormRow>

      {/* <FormRow label="Discount" error={errors?.discount?.message}> */}
      <FormRow label="Discount">
        <Input
          disabled={isCreating}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "The field is required",
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              "The discount should be lower than the regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        // error={errors?.description?.message}
      >
        <Textarea
          disabled={isCreating}
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "The description is required",
          })}
        />
      </FormRow>

      <FormRow label={"Cabin photo"}>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          disabled={isCreating}
          {...register("image", {
            required: "The image is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}

        <Button variation="secondary" type="reset" disabled={isCreating}>
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isCreating ? "Creating ..." : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
