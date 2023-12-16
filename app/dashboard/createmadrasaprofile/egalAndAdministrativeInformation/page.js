"use client";
import { TextInput, TextInputWithLabel } from "@/app/components/SmallComponets";
import { Label, Textarea } from "flowbite-react";
import { useEffect } from "react";

const LegalAndAdministrativeInformation = () => {
  const initialFormData = {
    registrationNumber: "",
    OwnershipType: "",
    description: "",
  };

  return (
    <>
      <h2 className="text-center">Legal Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <TextInputWithLabel
            label={"registrationNumber"}
            placeholder={"registrationNumber"}
            id={"registrationNumber"}
            htmlFor={"registrationNumber"}
          />

          {/* Ownership Type */}
          <TextInputWithLabel
            label={"Ownership"}
            placeholder={"Ownership"}
            id={"Ownership"}
            htmlFor={"Ownership"}
          />
          <TextInputWithLabel
            label={"director"}
            placeholder={"director"}
            id={"director"}
            htmlFor={"director"}
          />
        </form>
      </div>
    </>
  );
};

export default LegalAndAdministrativeInformation;
