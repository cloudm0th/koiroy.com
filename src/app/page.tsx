import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 h-[100dvh] w-full flex flex-col items-center gap-6 px-8 py-16 hide-scrollbars overflow-scroll">
      <img className="w-[252px]" src="/images/koiroy_header.svg" />
      <img className="w-[318px] -mb-[12px]" src="/images/about_me_header.svg" />
      <div className="max-w-[500px] font-light text-xl text-center mb-[10px]">
        my name is roy koerner, a young musician from the chicago area. i play
        jazz piano, and produce & compose music digitally. i release electronic
        music online as koiroy.
      </div>
      <img
        className="w-[244px] -mb-[12px]"
        src="/images/contact_me_header.svg"
      />
      <div className="max-w-[500px] font-light text-xl text-center -mb-[10px]">
        feel free to contact me if you are interested in collaborations,
        production work, or have any further questions.
      </div>
      <a
        className="text-[#FFC0D3] max-w-[500px] font-light text-xl mb-[10px]"
        href="royjkoerner@gmail.com"
      >
        royjkoerner@gmail.com
      </a>
      <img className="w-[170px] -mb-[8px]" src="/images/links_header.svg" />
      <div className="inline-flex gap-4">
        <a
          href="https://www.instagram.com/koiroymusic/?next=%2F"
          target="_blank"
        >
          <img className="w-12" src="/images/btn_instagram.svg" />
        </a>
        <a href="https://koiroy.newgrounds.com/" target="_blank">
          <img className="w-12" src="/images/btn_ng.svg" />
        </a>
        <a href="https://soundcloud.com/rice_cake64" target="_blank">
          <img className="w-12" src="/images/btn_soundcloud.svg" />
        </a>
        <a
          href="https://open.spotify.com/artist/6rCbNcQfvkX6Jxv7JyXBT5 "
          target="_blank"
        >
          <img className="w-12" src="/images/btn_spotify.svg" />
        </a>
        <a href="https://www.youtube.com/@koiroymusic" target="_blank">
          <img className="w-12" src="/images/btn_youtube.svg" />
        </a>
        <a href="https://koiroy.bandcamp.com/" target="_blank">
          <img className="w-12" src="/images/btn_bc.svg" />
        </a>
      </div>
    </div>
  );
}
