import dynamic from "next/dynamic";

const DynamicBackgroundGradientAnimation = dynamic(
  () => import("@/components/ui/client/BackgroundGradientAnimation"),
  { ssr: false }
);

export default DynamicBackgroundGradientAnimation;
