import { TFiles } from "./files";
import { FC, useState } from "react";

type EntryProps = {
  entry: TFiles;
  depth: number;
}

export default function Entry({ entry, depth }: EntryProps ): ReturnType<FC> {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsExpanded(prev => !prev)}>
        {entry.children && (
          <div style={{ paddingLeft: "6px", paddingRight: "6px", width: "20px" }} >
            {isExpanded ? "-" : "+"}
          </div>
        )}
        <span className="name" style={{ paddingLeft: entry.children ? "" : "20px" }} >{entry.name}</span>
      </button>
      <div style={{ borderLeft: "1px solid black", margin: "5px 5px" }}>
        {isExpanded && (<div style={{ paddingLeft: `5px` }} >
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1}/>
          ))}
        </div>)}
      </div>
    </>
  )
}
