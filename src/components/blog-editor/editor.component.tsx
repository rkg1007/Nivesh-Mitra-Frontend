"use client";

import Image from "next/image";
import defaultBanner from "@/assests/blog banner.png";
import { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "./tools";

export const EditorComponent = () => {
  const [title, setTitle] = useState("");

  const handleBannerChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleTitleKeyDown = (e: any) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e: any) => {
    const input = e.target;
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
    setTitle(input.value);
  };

  useEffect(() => {
      new EditorJS({
        holder: "editorjs",
        placeholder: "Lets write an awesome blog",
        tools,
      });
  });

  return (
    <section className="mx-auto w-full max-w-[900px]">
      <div className="relative aspect-video border-4 bg-white border-grey hover:opacity-80">
        <label htmlFor="uploadBanner" className="w-full h-full">
          <Image src={defaultBanner} alt="Default Banner" className="z-20" />
          <input
            id="uploadBanner"
            type="file"
            accept=".jpg, .png, .jpeg"
            hidden
            onChange={handleBannerChange}
          />
        </label>
      </div>
      <textarea
        placeholder="Blog Title"
        rows={1}
        className="text-4xl font-medium mt-10 w-full outline-none resize-none leading-tight placeholder:opacity-50"
        onKeyDown={handleTitleKeyDown}
        onChange={handleTitleChange}
        value={title}
      />
      <hr className="w-full opacity-10 my-5" />
      <div id="editorjs" />
    </section>
  );
};
