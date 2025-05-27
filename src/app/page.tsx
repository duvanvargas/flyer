import Spline from "@splinetool/react-spline";
import Flyer from "./Flyer";

export default function Home() {
  return (
    <main className="pointer-events-none">
      <Flyer />
      <Spline scene="https://prod.spline.design/qJ-xqtbUNNTgxbVG/scene.splinecode" />
    </main>
  );
}
