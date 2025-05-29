import MicButton from "./components/camfeed_components/micButton";
import CamButton from "./components/camfeed_components/camButton";
import Visualizer from "./components/visualizer";
import InputControl from "./components/inputControl";
import aiCamfeed from "./components/aiCamfeed";

const Linda = () => {
  return (
    <div className="w-full h-screen">
      <header className="justify-center flex flex-col px-10 py-6 space-y-2 bg-black">
        <h1 className="text-center text-2xl">L.I.N.D.A</h1>
        <h2 className="text-center text-sm">
          <span className="font-bold text-lg">L</span>ikely,
          <span className="font-bold text-lg"> I</span>
          ntelligent, &<span className="font-bold text-lg"> N</span>ot,
          <span className="font-bold text-lg"> D</span>umb,
          <span className="font-bold text-lg"> A</span>
          ssistant
        </h2>
      </header>

      <div className="h-[550px] drop-shadow-2xl/30 bg-black">
        <div className="flex justify-between absolute top-42 w-full h-full px-24">
          <div className="flex items-center justify-center h-full w-[510px] z-[9999] rounded-4xl bg-black border-2 border-blue-800 shadow-[12px_8px_24px_rgba(0,0,0,0.45)]">
            <InputControl
              CamButton={CamButton}
              Camfeed={aiCamfeed}
              MicButton={MicButton}
            />
          </div>
          <div className="flex flex-col justify-between items-center w-7/12 h-[630px]">
            <div className="flex w-full h-[320px] text-center text-xl overflow-auto">
              <p className="flex items-center justify-center text-center w-full">
                Lorem ipsum
              </p>
            </div>

            <Visualizer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linda;
