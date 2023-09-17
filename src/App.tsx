import Entry from "./Entry";
import { files } from "./files";
import { FC } from "react";

export default function App() {
  return (
    <div style={{ padding: "10px" }}>
      {files.children?.map((entry) => (
        <Entry entry={entry} depth={1}/>
      ))}      
    </div>
  );
}
