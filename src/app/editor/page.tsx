"use client";

import { EditorComponent, PublishFormComponent } from "@/components";
import { useState } from "react";

const BlogEditor = () => {
  const [blogEditorState, _] = useState<
    "editor" | "publishForm"
  >("publishForm");

  if (blogEditorState == "editor") {
    return <EditorComponent />;
  }

  return <PublishFormComponent />;
};

export default BlogEditor;
