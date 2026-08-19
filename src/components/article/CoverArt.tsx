import { coverStyle, type CoverPalette } from "@/lib/cover-art";

/**
 * Generated cover art for articles that have no featured image yet.
 *
 * Inline SVG rather than a file: it is a few hundred bytes, needs no image
 * request, scales from a 380px card to a 720px hero without resampling, and
 * carries no risk of being mistaken for a screenshot of a real product.
 */
export function CoverArt({ seed }: { seed: string }) {
  const { palette, motif } = coverStyle(seed);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 675"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`wash-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </linearGradient>
        </defs>
        <rect width="1200" height="675" fill={`url(#wash-${seed})`} />
        <Motif index={motif} palette={palette} />
      </svg>
    </div>
  );
}

function Motif({ index, palette }: { index: number; palette: CoverPalette }) {
  const stroke = palette.mark;

  switch (index) {
    // Dot field, denser toward the top-right.
    case 0:
      return (
        <g fill={stroke}>
          {Array.from({ length: 9 }, (_, row) =>
            Array.from({ length: 16 }, (_, column) => (
              <circle
                key={`${row}-${column}`}
                cx={60 + column * 72}
                cy={56 + row * 72}
                r={2 + ((column + (8 - row)) / 24) * 7}
                opacity={0.18 + ((column + (8 - row)) / 24) * 0.5}
              />
            )),
          )}
        </g>
      );

    // Concentric arcs radiating from the lower-left.
    case 1:
      return (
        <g fill="none" stroke={stroke} strokeWidth="4">
          {Array.from({ length: 11 }, (_, i) => (
            <circle key={i} cx="140" cy="600" r={110 + i * 95} opacity={0.75 - i * 0.055} />
          ))}
        </g>
      );

    // Columns rising from the baseline, like a comparison reduced to its shape.
    case 2:
      return (
        <g fill={stroke}>
          {[0.34, 0.58, 0.45, 0.78, 0.62, 0.92, 0.5, 0.7, 0.4].map((height, i) => {
            const barHeight = height * 470;
            return (
              <rect
                key={i}
                x={96 + i * 116}
                y={585 - barHeight}
                width="72"
                height={barHeight}
                rx="12"
                opacity={0.28 + height * 0.32}
              />
            );
          })}
        </g>
      );

    // Waveform.
    case 3:
      return (
        <g fill="none" stroke={stroke} strokeLinecap="round" strokeWidth="5">
          {Array.from({ length: 5 }, (_, i) => (
            <path
              key={i}
              opacity={0.8 - i * 0.13}
              d={Array.from({ length: 49 }, (_, step) => {
                const x = step * 25;
                const y = 340 + Math.sin(step / 4 + i * 0.7) * (70 + i * 26);
                return `${step === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`;
              }).join(" ")}
            />
          ))}
        </g>
      );

    // Connected nodes.
    case 4: {
      const nodes = [
        [200, 180],
        [430, 420],
        [620, 170],
        [820, 480],
        [1010, 250],
        [330, 560],
      ] as const;
      return (
        <g stroke={stroke} fill={stroke}>
          <g strokeWidth="3" opacity="0.5">
            {nodes.slice(1).map(([x, y], i) => {
              const [px, py] = nodes[i];
              return <line key={i} x1={px} y1={py} x2={x} y2={y} />;
            })}
            <line x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[5][0]} y2={nodes[5][1]} />
          </g>
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 2 ? 12 : 20} opacity={0.65} />
          ))}
        </g>
      );
    }

    // Ruled diagonals with one solid band.
    default:
      return (
        <g stroke={stroke}>
          <g strokeWidth="3" opacity="0.45">
            {Array.from({ length: 26 }, (_, i) => (
              <line key={i} x1={-200 + i * 78} y1="675" x2={100 + i * 78} y2="0" />
            ))}
          </g>
          <line x1="480" y1="675" x2="780" y2="0" strokeWidth="26" opacity="0.5" />
        </g>
      );
  }
}
