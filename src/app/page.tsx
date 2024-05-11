import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 h-[100dvh] w-full flex flex-col items-center gap-6 px-8 py-16 hide-scrollbar">
      <img className="w-80" src="/images/koiroy_header.svg" />
      <img className="w-80" src="/images/about_me_header.svg" />
      <div className="max-w-[500px]">
        hey there! my name is roy, aka koiroy. i am a young musician from the
        chicago area. I play jazz piano, and produce & compose music digitally.
        i play piano in the jazzardous waste jazz trio, and i release music
        online as koiroy.
      </div>
      <img className="w-80" src="/images/contact_me_header.svg" />
      <div className="max-w-[500px]">
        feel free to contact me if you are interested in collaborations,
        production work, or any further questions.
      </div>
      <a href="royjkoerner@gmail.com">royjkoerner@gmail.com</a>
      <img className="w-80" src="/images/links_header.svg" />
      <div className="inline-flex gap-4">
        <img className="w-16" src="/images/btn_instagram.svg" />
        <img className="w-16" src="/images/btn_ng.svg" />
        <img className="w-16" src="/images/btn_soundcloud.svg" />
        <img className="w-16" src="/images/btn_spotify.svg" />
        <img className="w-16" src="/images/btn_youtube.svg" />
      </div>
    </div>
  );
}
