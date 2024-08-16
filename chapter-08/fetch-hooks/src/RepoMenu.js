import React from "react";
import { useIterator } from "./hooks";
import RepositoryReadne from "./RepositoryReadme";

export default function RepoMenu({ repositories, login }) {
  const [{ name }, previous, next] = useIterator(repositories);
  //const [letter, previous, next] = useIterator(['a', 'b', 'c']);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button> {/*&lt; == < */}
        <p>{name}</p>
        <button onClick={next}>&gt;</button> {/*&gt; == > */}
      </div>
      <RepositoryReadne login={login} repo={name} />
    </>
  );
}
