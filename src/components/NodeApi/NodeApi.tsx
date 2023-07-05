import { FC, useEffect, useState } from "react";
import { checkConnection, platform, version } from "../../nodeAPI";

export const NodeApi: FC = () => {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const os = await version();
      const kernel = await platform();
      console.log("version: ", os);
      console.log("platform: ", kernel);
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
