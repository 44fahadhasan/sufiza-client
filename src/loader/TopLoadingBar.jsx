import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div>
      <LoadingBar
        color="#7fad44"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
    </div>
  );
};

export default TopLoadingBar;
