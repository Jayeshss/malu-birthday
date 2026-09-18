'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenes, storybookIntro, birthdayWish } from '@/lib/story-data';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const storyAsset = (file: string) => `${BASE_PATH}/story/${file}`;

/* ═══════════════════════════════════════════════════════
   COLOURS
   ═══════════════════════════════════════════════════════ */

const C = {
  bg:         '#faf8f4',
  bgCream:    '#f5f1eb',
  bgBeige:    '#efe9df',
  gold:       '#c4a86c',
  goldLight:  '#d4be8a',
  charcoal:   '#2c2c2c',
  text:       '#3d3d3d',
  textLight:  '#7a7a7a',
  textMuted:  '#a09888',
  divider:    '#d6cfc4',
};

/* ═══════════════════════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════════════════════ */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const slowReveal = {
  initial: { opacity: 0, scale: 1.015 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
};

/* ═══════════════════════════════════════════════════════
   IMAGE COMPONENT — Handles real images & elegant placeholders
   ═══════════════════════════════════════════════════════ */

function SceneImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [hasReal, setHasReal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasReal(true);
    img.onerror = () => setHasReal(false);
    img.src = src;
  }, [src]);

  if (hasReal) {
    return <img src={src} alt={alt} className={`w-full h-auto object-contain ${className}`} loading="lazy" />;
  }

  return (
    <div className={`w-full aspect-[16/10] bg-gradient-to-br from-[#e8e2d8] via-[#f0eadf] to-[#d9d0c2] flex items-center justify-center ${className}`}>
      <div className="text-center px-8">
        <div className="w-10 h-px mx-auto mb-4" style={{ backgroundColor: C.gold }} />
        <p className="text-xs tracking-[0.2em] uppercase" style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}>Illustration</p>
        <p className="text-[11px] mt-1.5" style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}>{alt}</p>
        <div className="w-10 h-px mx-auto mt-4" style={{ backgroundColor: C.gold }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 1 — INTRO / MALU PHOTOS
   ═══════════════════════════════════════════════════════ */

function IntroSection({ onEnterStory }: { onEnterStory: () => void }) {
  // Homepage carousel photos (4 uploaded images)
  const maluPhotos = [
    storyAsset('malu-01.jpg'),
    storyAsset('malu-02.jpg'),
    storyAsset('malu-03.jpg'),
    storyAsset('malu-04.jpg'),
  ];
  const [activePhoto, setActivePhoto] = useState(0);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActivePhoto(index);
    // Reset auto-cycle timer on manual interaction
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      setActivePhoto(prev => (prev + 1) % maluPhotos.length);
    }, 4000);
  }, [maluPhotos.length]);

  const goNextSlide = useCallback(() => {
    goToSlide((activePhoto + 1) % maluPhotos.length);
  }, [activePhoto, maluPhotos.length, goToSlide]);

  const goPrevSlide = useCallback(() => {
    goToSlide((activePhoto - 1 + maluPhotos.length) % maluPhotos.length);
  }, [activePhoto, maluPhotos.length, goToSlide]);

  // Auto-cycle photos
  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      setActivePhoto(prev => (prev + 1) % maluPhotos.length);
    }, 4000);
    return () => { if (autoTimerRef.current) clearInterval(autoTimerRef.current); };
  }, [maluPhotos.length]);

  // Touch/swipe support for carousel
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNextSlide();
      else goPrevSlide();
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: C.bg }}>
      {/* Decorative top line */}
      <motion.div
        className="w-12 h-px mb-10"
        style={{ backgroundColor: C.gold }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Birthday heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center tracking-wide mb-4"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.1, ease: 'easeOut' }}
        style={{ color: C.charcoal, fontFamily: 'var(--font-decorative)', fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', lineHeight: 1.15 }}
      >
        Happy Birthday, Maluti
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-center mb-2"
        style={{ color: C.text, fontFamily: 'var(--font-geist-sans)' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
      >
        Today is all about you.
      </motion.p>

      <motion.p
        className="text-sm sm:text-base text-center max-w-md mb-10"
        style={{ color: C.textLight, fontFamily: 'var(--font-geist-sans)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        A little surprise made with memories, love and moments.
      </motion.p>

      {/* 4-image Photo Carousel */}
      <motion.div
        className="w-full max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.9 }}
      >
        <div
          className="relative overflow-hidden rounded-sm group"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhoto}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <img
                src={maluPhotos[activePhoto]}
                alt={`Malu — Photo ${activePhoto + 1}`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle prev/next arrows — appear on hover (desktop) */}
          <button
            onClick={goPrevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity duration-300 cursor-pointer bg-black/20 backdrop-blur-sm"
            aria-label="Previous photo"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={goNextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity duration-300 cursor-pointer bg-black/20 backdrop-blur-sm"
            aria-label="Next photo"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* 4 carousel dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {maluPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-500 cursor-pointer ${
                i === activePhoto
                  ? 'w-2.5 h-2.5'
                  : 'w-1.5 h-1.5 opacity-40 hover:opacity-70'
              }`}
              style={{ backgroundColor: C.gold }}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Small tagline */}
      <motion.p
        className="text-xs tracking-[0.15em] uppercase text-center mb-10"
        style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.7 }}
      >
        For the girl who makes every memory special
      </motion.p>

      {/* Enter storybook button */}
      <motion.button
        onClick={onEnterStory}
        className="px-8 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase border cursor-pointer transition-all duration-500 hover:tracking-[0.25em]"
        style={{ fontFamily: 'var(--font-geist-sans)', color: C.charcoal, borderColor: C.divider, backgroundColor: 'transparent' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        whileHover={{ borderColor: C.gold }}
      >
        Begin the Story
      </motion.button>

      {/* Decorative bottom line */}
      <motion.div
        className="w-12 h-px mt-10"
        style={{ backgroundColor: C.gold }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 3.3, duration: 0.6 }}
      />
    </section>
  );
}

/* �@═══════════════════════════════════════════════════════
   SECTION 2 — STORYBOOK (30 images)
   ═══════════════════════════════════════════════════════ */

function StorybookSection() {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const total = scenes.length;
  const scene = scenes[current];

  const goNext = useCallback(() => {
    if (current < total - 1) setCurrent(prev => prev + 1);
  }, [current, total]);

  const goPrev = useCallback(() => {
    if (current > 0) setCurrent(prev => prev - 1);
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    if (!started) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [started, goNext, goPrev]);

  // Swipe navigation
  const touchStartY = useRef(0);
  useEffect(() => {
    if (!started) return;
    const onTouchStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) { if (diff > 0) { goNext(); } else { goPrev(); } }
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd); };
  }, [started, goNext, goPrev]);

  // Storybook intro overlay (Illustration Page)
  if (!started) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: C.bgCream }}>
        <div className="text-center max-w-2xl w-full">
          <motion.div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: C.gold }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.8 }} />

          {/* Intro illustration image */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={storyAsset('intro-01.jpg')}
              alt="Illustration — Intro"
              className="w-full h-auto object-contain rounded-sm"
            />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-5"
            style={{ color: C.charcoal, fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {storybookIntro.heading}
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base mb-10"
            style={{ color: C.textLight, fontFamily: 'var(--font-geist-sans)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {storybookIntro.subheading}
          </motion.p>
          <motion.button
            onClick={() => setStarted(true)}
            className="px-7 py-2.5 text-xs tracking-[0.2em] uppercase border cursor-pointer transition-all duration-500 hover:tracking-[0.25em]"
            style={{ fontFamily: 'var(--font-geist-sans)', color: C.charcoal, borderColor: C.divider, backgroundColor: 'transparent' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            whileHover={{ borderColor: C.gold }}
          >
            Open the Storybook
          </motion.button>
          <motion.div className="w-10 h-px mx-auto mt-8" style={{ backgroundColor: C.gold }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.9, duration: 0.6 }} />
        </div>
      </section>
    );
  }

  // Progress
  const progress = ((current + 1) / total) * 100;

  return (
    <section className="min-h-screen flex flex-col" style={{ backgroundColor: C.bg }}>
      {/* Progress bar */}
      <div className="w-full h-[1px]" style={{ backgroundColor: C.divider }}>
        <div className="h-full transition-all duration-700 ease-out" style={{ width: `${progress}%`, backgroundColor: C.gold }} />
      </div>

      {/* Scene content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-10 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full max-w-4xl"
          >
            {/* Progress number */}
            <p className="text-xs tracking-[0.15em] uppercase text-center mb-6" style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}>
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>

            {/* Landscape image */}
            <motion.div className="mb-6 md:mb-8" {...slowReveal}>
              <SceneImage src={scene.image} alt={scene.title} />
            </motion.div>

            {/* Scene text */}
            <motion.div className="max-w-xl mx-auto text-center" {...fadeUp}>
              {scene.date && (
                <p className="text-[11px] tracking-[0.15em] uppercase mb-2.5" style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}>
                  {scene.date}
                </p>
              )}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 leading-snug" style={{ color: C.charcoal, fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
                {scene.title}
              </h3>
              <p className="text-sm sm:text-base leading-[1.85]" style={{ color: C.text, fontFamily: 'var(--font-geist-sans)' }}>
                {scene.text}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-8 pt-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={goPrev}
            className={`text-xs tracking-[0.15em] uppercase transition-opacity duration-300 cursor-pointer ${current > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}
            disabled={current === 0}
          >
            ← Previous
          </button>
          <button
            onClick={goNext}
            className={`text-xs tracking-[0.15em] uppercase transition-opacity duration-300 cursor-pointer ${current < total - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}
            disabled={current >= total - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — FINAL BIRTHDAY WISH
   ═══════════════════════════════════════════════════════ */

function BirthdayWishSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ backgroundColor: C.bgCream }}>
      {/* Final image */}
      <motion.div className="w-full max-w-3xl mx-auto mb-12 md:mb-16" {...slowReveal}>
        <SceneImage src={birthdayWish.image} alt="Malu" />
      </motion.div>

      <div className="max-w-lg mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight"
          style={{ color: C.charcoal, fontFamily: 'var(--font-decorative)', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {birthdayWish.heading}
        </motion.h2>

        <motion.div
          className="w-10 h-px mx-auto mb-8"
          style={{ backgroundColor: C.gold }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Birthday paragraphs */}
        {birthdayWish.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="text-sm sm:text-base leading-[1.9] mb-5"
            style={{ color: C.text, fontFamily: 'var(--font-geist-sans)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.25, duration: 0.8 }}
          >
            {p}
          </motion.p>
        ))}

        <motion.div
          className="w-10 h-px mx-auto my-10"
          style={{ backgroundColor: C.gold }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />

        {/* Sign-off */}
        <motion.p
          className="text-base sm:text-lg font-light leading-loose whitespace-pre-line mb-8"
          style={{ color: C.charcoal, fontFamily: 'var(--font-geist-sans)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {birthdayWish.signoff}
        </motion.p>

        {/* Closing line */}
        <motion.p
          className="text-sm tracking-[0.08em] italic"
          style={{ color: C.textLight, fontFamily: 'var(--font-geist-sans)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.7 }}
        >
          {birthdayWish.closingLine}
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */

export default function BirthdayPage() {
  // 0 = intro, 1 = storybook, 2 = birthday wish
  const [section, setSection] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => {});
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {});
    } else {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg }}>
      <audio ref={audioRef} loop preload="auto">
        <source src={`${BASE_PATH}/maruvaarthai.mp3.mp3`} type="audio/mpeg" />
      </audio>

      {!hasEntered && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{ backgroundColor: C.bg }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: C.gold }} />
            <p
              className="text-xs tracking-[0.22em] uppercase mb-5"
              style={{ color: C.textMuted, fontFamily: 'var(--font-geist-sans)' }}
            >
              For Maluti
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-light mb-8"
              style={{ color: C.charcoal, fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              A little surprise is waiting for you
            </h1>
            <button
              onClick={() => {
                startMusic();
                setHasEntered(true);
              }}
              className="px-8 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase border cursor-pointer transition-all duration-500 hover:tracking-[0.25em]"
              style={{
                fontFamily: 'var(--font-geist-sans)',
                color: C.charcoal,
                borderColor: C.divider,
                backgroundColor: 'transparent',
              }}
            >
              Tap to the Surprise
            </button>
            <div className="w-12 h-px mx-auto mt-8" style={{ backgroundColor: C.gold }} />
          </motion.div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {section === 0 && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <IntroSection onEnterStory={() => setSection(1)} />
          </motion.div>
        )}
        {section === 1 && (
          <motion.div key="storybook" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <StorybookSection />
          </motion.div>
        )}
        {section === 2 && (
          <motion.div key="wish" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <BirthdayWishSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section navigation dots (visible in storybook) */}
      {section === 1 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4">
          {([0, 1, 2] as const).map(s => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${section === s ? 'scale-125' : 'opacity-40'}`}
              style={{ backgroundColor: C.gold }}
              aria-label={`Section ${s + 1}`}
            />
          ))}
        </div>
      )}

      {hasEntered && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-white/90 px-4 py-3 text-sm shadow-lg backdrop-blur cursor-pointer"
          aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
        >
          {isMusicPlaying ? '♫ Pause' : '♫ Play'}
        </button>
      )}
    </div>
  );
}
