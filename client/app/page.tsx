import Interface from "./components/interface";
import Visualizer from "./components/ai_visualizer";
import Camera from "./components/ai_camfeed";

export default function Home() {
  return <Interface Visualizer={Visualizer} Camera={Camera} />;
}
