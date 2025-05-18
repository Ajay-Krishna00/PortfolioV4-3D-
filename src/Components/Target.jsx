import { useGSAP } from "@gsap/react";
import { Stars } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

export default function Target() {
  const meshRef = useRef();

  useGSAP(() => {
    gsap.to(meshRef.current.rotation, {
      x: -0.3,
      y: -0.3,
      z: 0,
      duration: 2,
      ease: "power2.inOut",
    });
  });
  return (
    <>
      <Stars saturation={0} count={800} speed={2} ref={meshRef} />
    </>
  );
}
