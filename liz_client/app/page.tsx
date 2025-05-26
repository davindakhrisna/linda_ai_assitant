import MuteButton from "./components/mutebutton";
import Interface from "./components/interface";
import Visualizer from "./components/ai_visualizer";

export default function Home() {
  return <Interface MuteButton={MuteButton} Visualizer={Visualizer} />;
}
