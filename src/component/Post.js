import React from "react";

function Post({ title, category, content }) {
  return (
    <div className="flex flex-row w-full border border-gray-400 space-x-3 rounded p-3">
      <div className="flex flex-col justify-between w-1/4 min-h-[100px]">
        <div className="font-bold text-justify">{title}</div>
        <div>{category}</div>
      </div>
      <div className="flex-1">{content}</div>
    </div>
  );
}

export default Post;
