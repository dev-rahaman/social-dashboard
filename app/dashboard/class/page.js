"use client";
import React from "react";
import { Button, TextInput } from "@/app/components/SmallComponents";

const Class = () => {
  const handleArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const selectVideo = form.selectVideo.value;
    const writeTittle = form.writeTittle.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const tags = form.tags.value;

    const newClass = { selectVideo, writeTittle, description, thumbnail, tags };

    fetch("http://localhost:3001/add-class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleArticle} className="flex flex-col gap-y-5">
      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"selectVideo"}
        id={"selectVideo"}
        labelTitle={"select Video"}
        name={"selectVideo"}
        paragraph={"একটি ক্লাস ভিডিও সিলেক্ট করুন"}
      />

      {/* title  */}
      <TextInput
        type={"text"}
        htmlFor={"writeTittle"}
        id={"writeTittle"}
        labelTitle={"writeTittle"}
        name={"writeTittle"}
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
      <TextInput
        type={"file"}
        htmlFor={"thumbnail"}
        id={"thumbnail"}
        labelTitle={"thumbnail"}
        name={"thumbnail"}
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

      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        paragraph={"Minimum 5 tags is required"}
      />

      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Class;
