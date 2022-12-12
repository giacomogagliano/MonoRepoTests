import React, { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export default function index() {
  const [name, setName] = useState({ name: "", version: "", major: "" });
  useEffect(() => {
    const parser = new UAParser();
    const name = parser.getBrowser().name;
    const version = parser.getBrowser().version;
    const major = parser.getBrowser().major;

    setName({
      major,
      name,
      version,
    });
  }, []);

  return (
    <>
      <div>{name.name}</div>
      <div>{name.version}</div>
      <div>{name.major}</div>
      <div>{name.major}</div>
    </>
  );
}
