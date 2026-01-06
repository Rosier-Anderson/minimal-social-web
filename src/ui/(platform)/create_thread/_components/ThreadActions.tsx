"use client";

import React, {useRef, useState} from "react";
import {HiOutlineEmojiHappy} from "react-icons/hi";
import {IoLocationOutline} from "react-icons/io5";
import {LuImagePlus} from "react-icons/lu";

export default await function ThreadActions() {
  const [preview, setPreview] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return null;
  };
  return (
    <div className="flex w-20 justify-between my-auto  ">
      <label htmlFor="thread_image">
        <LuImagePlus className="size-5" />
      </label>
      <input
        hidden
        onChange={handleChange}
        id="thread_image"
        name="thread_image"
        type="file"
        placeholder=""
        className="cursor-pointer"
      />
      <label htmlFor="thread_emoji">
        <HiOutlineEmojiHappy className="size-5" />
      </label>
      <input
        hidden
        id="thread_emoji"
        name="thread_emoji"
        className="cursor-pointer"
      />
      <label htmlFor="thread_localisation">
        <IoLocationOutline className="size-5" />
      </label>
      <input
        hidden
        id="thread_localisation"
        name="thread_localisation"
        className="cursor-pointer"
      />
    </div>
  );
};
