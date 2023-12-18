"use client";
import { AuthContext } from "@/app/Provider/AuthProvider";
import {
  TextInput,
  TextInputWithLabel,
} from "@/app/components/SmallComponents";
import { Label } from "flowbite-react";
import { useContext, useEffect } from "react";

const MedicalStaffInformation = () => {
  return (
    <>
      <h2 className="text-center">Medical Staff Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <div className="mb-2 block">
            <TextInputWithLabel
              label={"madrasa name"}
              placeholder={"madrasa name"}
            />
          </div>

          {/* Total Number of Doctors */}

          {/*Total Number of Nurses */}
        </form>
      </div>
    </>
  );
};

export default MedicalStaffInformation;
