import { useEffect, useState, type RefObject } from 'react';

interface GridLines {
  verticals: number[];
  horizontals: number[];
}

export function useDecorativeGrid(containerRef: RefObject<HTMLDivElement | null>): GridLines {
  const [lines, setLines] = useState<GridLines>({ verticals: [], horizontals: [] });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function compute() {
      const el = containerRef.current;
      if (!el) return;

      const cellSize = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--cell-size')
      );
      const colW = 100 / 12;

      // 13 vertical lines (0% to 100%)
      const vLines: number[] = [];
      for (let i = 0; i <= 12; i++) {
        vLines.push(i * colW);
      }

      // Horizontal lines every cellSize px
      const h = el.offsetHeight;
      const hLines: number[] = [];
      for (let y = 0; y <= h; y += cellSize) {
        hLines.push(y);
      }

      setLines({ verticals: vLines, horizontals: hLines });
    }

    compute();

    let timeout: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(compute, 150);
    });

    observer.observe(container);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [containerRef]);

  return lines;
}
