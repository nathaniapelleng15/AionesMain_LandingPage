import React, { useRef, useState, useEffect } from "react";

export const HeroOrbits: React.FC = () => {
  const pathARef = useRef<SVGPathElement>(null);
  const pathBRef = useRef<SVGPathElement>(null);
  const pathCRef = useRef<SVGPathElement>(null);

  const [lenA, setLenA] = useState<number>(3490);
  const [lenB, setLenB] = useState<number>(3840);
  const [lenC, setLenC] = useState<number>(3180);

  useEffect(() => {
    try {
      if (pathARef.current) {
        const lA = pathARef.current.getTotalLength();
        if (lA > 0) setLenA(lA);
      }
      if (pathBRef.current) {
        const lB = pathBRef.current.getTotalLength();
        if (lB > 0) setLenB(lB);
      }
      if (pathCRef.current) {
        const lC = pathCRef.current.getTotalLength();
        if (lC > 0) setLenC(lC);
      }
    } catch {
      // Fallback lengths calculated via Ramanujan approximation
      setLenA(3490);
      setLenB(3840);
      setLenC(3180);
    }
  }, []);

  // Standard closed ellipse path generator centered at (cx, cy)
  const makeEllipsePath = (
    cx: number,
    cy: number,
    rx: number,
    ry: number
  ): string => {
    return `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`;
  };

  // Center coordinate for all orbits
  const cx = 720;
  const cy = 300;

  // Path definitions (shrunk ~15%)
  const pathA = makeEllipsePath(cx, cy, 640, 250);
  const pathB = makeEllipsePath(cx, cy, 700, 300);
  const pathC = makeEllipsePath(cx, cy, 590, 220);

  // Streak lengths
  const streakA = Math.round(lenA * 0.18);
  const streakB = Math.round(lenB * 0.12);
  const streakC = Math.round(lenC * 0.10);
  const streakD = Math.round(lenA * 0.05);

  return (
    <div
      className="hero-orbits-container absolute inset-0 pointer-events-none select-none overflow-hidden z-[1]"
      aria-hidden="true"
      style={{
        maskImage:
          "radial-gradient(ellipse 34% 40% at 50% 42%, transparent 0%, transparent 60%, black 100%), linear-gradient(180deg, black 0%, black 65%, transparent 90%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 34% 40% at 50% 42%, transparent 0%, transparent 60%, black 100%), linear-gradient(180deg, black 0%, black 65%, transparent 90%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          {/* Cyan/Blue glow filter for Jejak A and D */}
          <filter id="orbitGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              floodColor="#017cc3"
              floodOpacity="0.45"
            />
          </filter>

          {/* Vertical fade gradient for mask */}
          <linearGradient id="orbitVertFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="65%" stopColor="white" />
            <stop offset="90%" stopColor="black" />
          </linearGradient>

          {/* Smooth blur filter for center hole */}
          <filter id="centerHoleBlur">
            <feGaussianBlur stdDeviation="35" />
          </filter>

          {/* SVG Mask: Fades out bottom showcase area and punches center text hole */}
          <mask id="heroOrbitMask">
            <rect width="1440" height="800" fill="url(#orbitVertFade)" />
            <ellipse
              cx={cx}
              cy={cy}
              rx="420"
              ry="220"
              fill="black"
              filter="url(#centerHoleBlur)"
            />
          </mask>
        </defs>

        {/* Group with slow drift rotation & mask */}
        <g
          className="animate-orbits-drift hero-orbits-group"
          mask="url(#heroOrbitMask)"
        >
          {/* JEJAK B: Orbit rx 820, ry 360, rotate(8deg), #2a1570, width 3, max opacity 0.6 */}
          <g className="hidden min-[960px]:block">
            <path
              ref={pathBRef}
              d={pathB}
              transform={`rotate(8, ${cx}, ${cy})`}
              stroke="#2a1570"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="anim-orbit-b track-stroke-b"
              style={{
                strokeDasharray: `${streakB} ${lenB - streakB}`,
              }}
            />
          </g>

          {/* JEJAK C: Orbit rx 700, ry 260, rotate(-24deg), #017cc3, width 2.5 */}
          <g className="hidden min-[960px]:block">
            <path
              ref={pathCRef}
              d={pathC}
              transform={`rotate(-24, ${cx}, ${cy})`}
              stroke="#017cc3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="anim-orbit-c track-stroke-c"
              style={{
                strokeDasharray: `${streakC} ${lenC - streakC}`,
              }}
            />
          </g>

          {/* JEJAK A: Orbit rx 760, ry 300, rotate(-12deg), #017cc3, width 5 */}
          <path
            ref={pathARef}
            d={pathA}
            transform={`rotate(-12, ${cx}, ${cy})`}
            stroke="#017cc3"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#orbitGlow)"
            className="anim-orbit-a track-stroke-a"
            style={{
              strokeDasharray: `${streakA} ${lenA - streakA}`,
            }}
          />

          {/* JEJAK D (Kilau Kepala): Orbit same as A, stroke #dbffff, width 2, following right in front */}
          <path
            d={pathA}
            transform={`rotate(-12, ${cx}, ${cy})`}
            stroke="#dbffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#orbitGlow)"
            className="anim-orbit-d track-stroke-d"
            style={{
              strokeDasharray: `${streakD} ${lenA - streakD}`,
            }}
          />
        </g>
      </svg>
    </div>
  );
};
