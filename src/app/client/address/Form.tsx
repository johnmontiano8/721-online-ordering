"use client";

import CheckoutSteps from "@/components/CheckOutSteps";
import { Button } from "@/components/ui/button";
import useCartService from "@/lib/hooks/useCartStore";
import { Address } from "@/lib/models/OrderModel";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, ValidationRule, useForm } from "react-hook-form";

const Form = () => {
  const router = useRouter();
  const { saveAddress, Address } = useCartService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Address>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
    },
  });

  useEffect(() => {
    if (Address) {
      setValue("firstName", Address.firstName);
      setValue("lastName", Address.lastName);
      setValue("address", Address.address);
    }
  }, [setValue, Address]);

  const formSubmit: SubmitHandler<Address> = async (form) => {
    saveAddress(form);
    router.push("/payment");
  };

  const Input = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof Address;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="mb-2">
      <label className="label" htmlFor={id}>
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} is required`,
          pattern,
        })}
        className="input input-bordered w-full max-w-sm"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <CheckoutSteps current={1} />
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Address</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <Input name="First Name" id="firstName" required />
            <Input name="Last Name" id="lastName" required />
            <Input name="Address" id="address" required />
            <div className="mt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner mr-2"></span>
                )}
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
