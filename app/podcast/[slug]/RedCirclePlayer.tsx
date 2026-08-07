"use client";

import Script from "next/script";

type Props = {
  showId: string;
  episodeId: string;
};

export default function RedCirclePlayer({ showId, episodeId }: Props) {
  const scriptSrc = `https://api.podcache.net/embedded-player/sh/${showId}/ep/${episodeId}`;
  const playerClass = `redcirclePlayer-${episodeId}`;

  return (
    <div className="mb-8">
      <Script
        src={scriptSrc}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof (window as Window & { redcircleIframe?: () => void }).redcircleIframe === "function") {
            (window as Window & { redcircleIframe?: () => void }).redcircleIframe!();
          }
        }}
      />
      <div className={playerClass} />
      <style>{`
        .redcircle-link:link { color: #ea404d; text-decoration: none; }
        .redcircle-link:hover { color: #ea404d; }
        .redcircle-link:active { color: #ea404d; }
        .redcircle-link:visited { color: #ea404d; }
      `}</style>
      <p style={{ marginTop: "3px", marginLeft: "11px", fontFamily: "sans-serif", fontSize: "10px", color: "gray" }}>
        Powered by{" "}
        <a
          className="redcircle-link"
          href="https://redcircle.com?utm_source=rc_embedded_player&utm_medium=web&utm_campaign=embedded_v1"
        >
          RedCircle
        </a>
      </p>
    </div>
  );
}
