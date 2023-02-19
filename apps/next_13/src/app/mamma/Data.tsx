// "use client";
import React, { use } from "react";

export async function getData() {
  await new Promise((res) => setTimeout(res, 4000));
  return "cazzo";
}

export const Data = () => {
  let data = use(getData());
  return (
    <div>
      {data}
      <input type="text"></input>
    </div>
  );
};
