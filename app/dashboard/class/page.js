import React from "react";
import { Input } from "../video/page";
import { Button } from "@/app/components/SmallComponets";

const Class = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* video */}
      <Input
        type={"file"}
        inputId={"video"}
        name={"video"}
        labelName={"video"}
        labelTitle={"ক্লাস"}
        paragraph={"একটি ক্লাস ভিডিও সিলেক্ট করুন"}
      />

      {/* title  */}
      <Input
        type={"text"}
        name={"video title"}
        inputId={"videotitle"}
        labelName={"videotitle"}
        labelTitle={"ক্লাস টাইটেল"}
        paragraph={"একটি ক্লাস টাইটেল লিখুন"}
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor={"description"}>ডেসক্রিপশন</label>
        <span className="block">{"ক্লাস ডেসক্রিপশন লিখুন"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px]"
        />
      </div>

      {/* video */}
      <Input
        type={"file"}
        inputId={"Thumbnail"}
        name={"Thumbnail"}
        labelName={"Thumbnail"}
        labelTitle={"থাম্বনেইল"}
        paragraph={"একটি ক্লাস থাম্বনেইল সিলেক্ট করুন"}
      />

      {/* playlist */}
      <select>
        <option>Select a playlist</option>
        <option>name1</option>
        <option>name2</option>
        <option>name3</option>
        <option>name4</option>
        <option>name5</option>
      </select>
      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
    </div>
  );
};

export default Class;
