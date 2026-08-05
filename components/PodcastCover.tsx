import type { CSSProperties } from "react";

interface PodcastCoverProps {
  mini?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function PodcastCover({ mini = false, className, style }: PodcastCoverProps) {
  const baseStyle: CSSProperties = mini ? { width: 96, height: 96 } : {};
  return (
    <div
      className={`twt-cover${mini ? " twt-cover--mini" : ""}${className ? ` ${className}` : ""}`}
      data-twt-cover=""
      style={{ ...baseStyle, ...style }}
    >
      <div className="twt-cover__arch">
        <div className="twt-cover__wave">
          <span />
          <span />
          <span />
          <span />
          <span />
          {!mini && (
            <>
              <span />
              <span />
            </>
          )}
        </div>
      </div>
      {!mini && (
        <>
          <div className="twt-cover__title">THE WALKING TENOR</div>
          <div className="twt-cover__kicker">A Podcast</div>
        </>
      )}
      <div className="twt-cover__tick" />
    </div>
  );
}
