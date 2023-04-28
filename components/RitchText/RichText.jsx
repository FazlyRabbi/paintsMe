import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  ["link", "image"],
  ["clean"],
];

function RichText({ setProduct, product }) {
  const handleValueChange = (newValue) => {
    setProduct({ ...product, Description: newValue });
  };

  return (
    <>
      <ReactQuill
        value={product.Description}
        className="h-[15rem] mb-[5.5rem] xl:mb-[4rem] "
        onChange={handleValueChange}
        modules={{ toolbar: toolbarOptions }}
        placeholder="Type something here..."
      />
      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </>
  );
}

export default RichText;
