import { FC } from "react";

interface InterfaceProps {
  MuteButton: FC;
  Visualizer: FC;
}

const Interface: FC<InterfaceProps> = ({ MuteButton, Visualizer }) => {
  return (
    <div className="w-full h-screen">
      <header className="justify-center flex p-10 bg-black">
        <h1 className="text-center text-2xl">Logical Integrated Zipper</h1>
      </header>

      <div className="relative h-[550px] drop-shadow-2xl/30 bg-black">
        <div className="flex justify-between absolute top-42 w-full h-full px-24">
          <div className="h-full w-[510px] z-[9999] bg-black border-2 border-blue-800 shadow-[12px_8px_24px_rgba(0,0,0,0.45)]">
            <MuteButton />
          </div>
          <div className="flex flex-col justify-between items-center w-7/12 h-[630px]">
            <div className="w-full h-[320px] text-center text-xl overflow-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas mattis nunc sed nisi molestie aliquam. Morbi egestas
                lectus tortor, sit amet pulvinar orci finibus id. Nam dapibus
                neque at ultrices finibus. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae; Morbi
                sodales posuere ante, non efficitur metus sodales eu. Phasellus
                eget magna at elit ornare rutrum in eu metus. Nullam ex massa,
                tempor non ex sed, semper sollicitudin odio.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Maecenas mattis nunc sed
                nisi molestie aliquam. Morbi egestas lectus tortor, sit amet
                pulvinar orci finibus id. Nam dapibus neque at ultrices finibus.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Morbi sodales posuere ante, non efficitur
                metus sodales eu. Phasellus eget magna at elit ornare rutrum in
                eu metus. Nullam ex massa, tempor non ex sed, semper
                sollicitudin odio.
              </p>
            </div>

            <Visualizer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
