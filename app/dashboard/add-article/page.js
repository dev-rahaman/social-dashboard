"use client";

import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { Button } from "@/app/components/SmallComponets";

export const TextInput = ({ htmlFor, id, labelTitle, paragraph, name }) => {
  return (
    <div className="bg-gray-200 p-5 rounded w-[900px]">
      <label htmlFor={htmlFor}>{labelTitle}</label>
      <span className="block">{paragraph}</span>
      <input type="text" id={id} name={name} required className="w-full" />
    </div>
  );
};

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const joditConfig = {
    disablePlugins: ["POWERED BY JODIT"],
  };

  const handleArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const tags = form.tags.value;

    const newArticle = { title, content, tags };

    fetch("http://localhost:3001/add-article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleArticle} className="flex flex-col gap-y-5">
      <TextInput
        labelTitle={"Title"}
        htmlFor={"title"}
        id={"title"}
        paragraph={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
        name={"title"}
      />

      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor="title">Content</label>
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
        labelTitle={"Tag"}
        htmlFor={"tags"}
        id={"tags"}
        paragraph={"Minimum 5 tags is required"}
        name={"tags"}
      />

      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default AddBlog;
