import React, { useState } from "react";
export default function main() {
  const [setRepoInput, repoInput] = useState("");
  return (
    <>
      <form onSubmit={() => {}}>
        <input
          placeholder="usuário/repositório"
          value={repoInput}
          onChange={e => setRepoInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        <li>
          <p>
            <strong>facebook/react</strong> (We're gonna rock this house until
            we knock it down. So turn the volume loud. 'Cause it's mayhem 'til
            the A.M.. So, baby, make just like K-Fed. And let yourself go, let
            yourself go. Say "Fuck it!" before we kick the bucket. Life's too
            short to not go for broke. So everybody, everybody, go berserk, grab
            your vial, yeah.)
          </p>
          <a href="http://github.com/facebook/react">Acessar</a>
        </li>
      </ul>
    </>
  );
}
