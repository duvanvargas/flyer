import Spline from "@splinetool/react-spline";
import Flyer from "./Flyer";

export default function Home() {
  return (
    <main className="h-full bg-black  flex-col items-center justify-center text-white">
      <Flyer />
      <div className="">
        <Spline scene="https://prod.spline.design/qJ-xqtbUNNTgxbVG/scene.splinecode" />
      </div>
    </main>
  );
}
