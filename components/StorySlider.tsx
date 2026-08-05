'use client';

import { useRef, useEffect } from 'react';
import './story-slider.css';

export default function StorySlider() {
  const boxRef    = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLImageElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box    = boxRef.current;
    const reveal = revealRef.current;
    const handle = handleRef.current;
    if (!box || !reveal || !handle) return;

    let dragging = false;

    function setPosition(pct: number) {
      pct = Math.max(0, Math.min(100, pct));
      reveal!.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle!.style.left = pct + '%';
    }

    function pctFromEvent(e: Event): number {
      const rect = box!.getBoundingClientRect();
      const clientX =
        e instanceof TouchEvent ? e.touches[0].clientX : (e as MouseEvent).clientX;
      return ((clientX - rect.left) / rect.width) * 100;
    }

    function startDrag(e: Event) {
      dragging = true;
      setPosition(pctFromEvent(e));
    }

    function moveDrag(e: Event) {
      if (!dragging) return;
      setPosition(pctFromEvent(e));
      e.preventDefault();
    }

    function endDrag() {
      dragging = false;
    }

    handle.addEventListener('mousedown', startDrag);
    box.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);
    box.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', endDrag);

    setPosition(50);

    return () => {
      handle.removeEventListener('mousedown', startDrag);
      box.removeEventListener('mousedown', startDrag);
      window.removeEventListener('mousemove', moveDrag);
      window.removeEventListener('mouseup', endDrag);
      box.removeEventListener('touchstart', startDrag);
      window.removeEventListener('touchmove', moveDrag);
      window.removeEventListener('touchend', endDrag);
    };
  }, []);

  return (
    <div className="story-slider" ref={boxRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="story-slider__base"
        src="/story-soldier.jpg"
        alt="Portrait in U.S. Army uniform"
        draggable={false}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={revealRef}
        className="story-slider__reveal"
        src="/story-tenor-bw.jpg"
        alt="Black and white portrait as an operatic tenor"
        draggable={false}
      />
      <div className="story-slider__handle" ref={handleRef}>
        <div className="story-slider__grip" />
      </div>
      <div className="story-slider__label story-slider__label--left">Tenor</div>
      <div className="story-slider__label story-slider__label--right">Soldier</div>
    </div>
  );
}
