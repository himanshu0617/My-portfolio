"use client";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
      document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
      document.body.style.setProperty("--first-color", firstColor);
      document.body.style.setProperty("--second-color", secondColor);
      document.body.style.setProperty("--third-color", thirdColor);
      document.body.style.setProperty("--fourth-color", fourthColor);
      document.body.style.setProperty("--fifth-color", fifthColor);
      document.body.style.setProperty("--pointer-color", pointerColor);
      document.body.style.setProperty("--size", size);
      document.body.style.setProperty("--blending-value", blendingValue);
    }
    return () => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        document.body.style.removeProperty("--gradient-background-start");
        document.body.style.removeProperty("--gradient-background-end");
        document.body.style.removeProperty("--first-color");
        document.body.style.removeProperty("--second-color");
        document.body.style.removeProperty("--third-color");
        document.body.style.removeProperty("--fourth-color");
        document.body.style.removeProperty("--fifth-color");
        document.body.style.removeProperty("--pointer-color");
        document.body.style.removeProperty("--size");
        document.body.style.removeProperty("--blending-value");
      }
    };
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  return (
    <div className={cn("background-gradient-animation", containerClassName)}>
      {children}
    </div>
  );
};

export default BackgroundGradientAnimation;
