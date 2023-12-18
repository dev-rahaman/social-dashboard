"use client";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { Button, TextInput } from "@/app/components/SmallComponents";

const Notice = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const joditConfig = {
    disablePlugins: ["POWERED BY JODIT"],
  };

  const handleNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const principalName = form.principalName.value;
    const schoolPlace = form.schoolPlace.value;
    const schoolSeal = form.schoolSeal.value;
    const noticeDate = form.noticeDate.value;
    const tags = form.tags.value;

    const newNotice = {
      title,
      content,
      principalName,
      schoolSeal,
      schoolPlace,
      noticeDate,
      tags,
    };

    fetch("http://localhost:3001/add-notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleNotice} className="flex flex-col gap-y-5">
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"title"}
        name={"title"}
        paragraph={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
      />

      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor="Content">Content</label>
        <span className="block">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </span>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          config={joditConfig}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
          name={"content"}
        />
      </div>

      <TextInput
        type={"text"}
        htmlFor={"principalName"}
        id={"principalName"}
        labelTitle={"principal Name"}
        name={"principalName"}
        paragraph={"Enter Principal's Name here."}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolPlace"}
        id={"schoolPlace"}
        labelTitle={"school Place"}
        name={"schoolPlace"}
        paragraph={"Enter school Place here."}
      />
      <TextInput
        type={"file"}
        htmlFor={"schoolSeal"}
        id={"schoolSeal"}
        labelTitle={"school Seal"}
        name={"schoolSeal"}
        paragraph={"Enter School Seal here."}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolPlace"}
        id={"schoolPlace"}
        labelTitle={"school Place"}
        name={"schoolPlace"}
        paragraph={"Enter School Place here."}
      />
      <TextInput
        type={"date"}
        htmlFor={"noticeDate"}
        id={"noticeDate"}
        labelTitle={"notice Date"}
        name={"noticeDate"}
        paragraph={"Minimum 5 tags is required"}
      />
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"tags"}
        name={"tags"}
        paragraph={"Minimum 5 tags is required"}
      />
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Notice;
