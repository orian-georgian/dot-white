"use client";

type ProgressTimelineProps = {
  progress: number;
  desktopTop: string;
  desktopLeft: string;
  desktopRight: string;
};

export function ProgressTimeline({
  progress,
  desktopTop,
  desktopLeft,
  desktopRight,
}: ProgressTimelineProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute bottom-5 right-5 top-5 w-[2px] md:hidden"
      >
        <div className="absolute inset-0 bg-foreground/18" />
        <div
          className="absolute inset-0 origin-top bg-gradient-to-b from-pink-brand/0 via-pink-brand/55 to-pink-brand/0"
          style={{ transform: `scaleY(${progress})` }}
        />
        <span
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-brand"
          style={{ top: `${progress * 100}%` }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute hidden md:block"
        style={{ top: desktopTop, left: desktopLeft, right: desktopRight }}
      >
        <div className="absolute left-0 top-0 h-[2px] w-full -translate-y-1/2 bg-foreground/18" />
        <div
          className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-pink-brand/0 via-pink-brand/60 to-pink-brand/0"
          style={{
            transform: `translateY(-50%) scaleX(${progress})`,
            opacity: 1,
          }}
        />
        <span
          className="absolute top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-brand"
          style={{ left: `${progress * 100}%` }}
        />
      </div>
    </>
  );
}
