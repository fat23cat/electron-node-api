import { FC, useEffect, useState } from "react";
import { checkConnection, platform, version } from "../../nodeAPI";

export const NodeApi: FC = () => {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const v = await version();
      const p = await platform();
      console.log("version: ", v);
      console.log("platform: ", p);
    })();
  }, []);

  const onClick = async () => {
    const promises = [checkConnection("custom text"), checkConnection()];
    const result = await Promise.all(promises);
    setResult((prev) => [...prev, JSON.stringify(result)]);
  };

  return (
    <>
      <button onClick={onClick}>Check</button>
      <h1>Result:</h1>
      {result.map((r) => (
        <p key={r}>{r}</p>
      ))}
    </>
  );
};
