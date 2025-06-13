import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CusLoader = ({ onFinish }) => {
  const { progress } = useProgress();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      const loading = document.querySelector(".Lodd");
      loading.classList.add("fade-out");
      setIsLoading(false);
      const timer1 = setTimeout(() => {
        const loadingContainer = document.querySelector(".Loading-container");
        loadingContainer.classList.add("Loading-bg");
        loadingContainer.classList.remove("Loading");
        const welcomeText = document.querySelector(".welcome");
        welcomeText.classList.add("Netflix");
      }, 2000);
      const timer = setTimeout(() => {
        onFinish();
      }, 4000);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer1);
      };
    }
  }, [progress, onFinish]);

  return (
    <div
      className=" fixed inset-0 bg-white text-white flex flex-col items-center justify-center "
      style={{ zIndex: 9999 }}
    >
      <div className="Loading-container Loading text-3xl font-bold px-6 py-5 border-[4px] rounded-full border-violet-500 bg-black-200 w-72  text-center">
        {isLoading ? (
          <p className="Lodd">Loading... {progress.toFixed(0)}%</p>
        ) : (
          <p className="animate-fade-in welcome">Welcome</p>
        )}
      </div>
    </div>
  );
};

export default CusLoader;
