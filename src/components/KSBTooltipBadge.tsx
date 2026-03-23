import React, { useEffect, useId, useRef, useState } from 'react';
import { getKSBDescription } from '../ksbDefinitions';

type KSBType = 'K' | 'S' | 'B';

const TYPE_COLORS: Record<KSBType, string> = {
  K: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-200',
  S: 'bg-green-100 text-green-800 dark:bg-emerald-950/70 dark:text-emerald-200',
  B: 'bg-yellow-100 text-yellow-800 dark:bg-amber-950/70 dark:text-amber-200',
};

interface KSBTooltipBadgeProps {
  code: string;
  type?: KSBType;
  compact?: boolean;
  align?: 'center' | 'start' | 'end';
}

const KSBTooltipBadge: React.FC<KSBTooltipBadgeProps> = ({ code, type, compact = false, align = 'center' }) => {
  const resolvedType = (type || code.charAt(0)) as KSBType;
  const description = getKSBDescription(code);
  const colorClass = TYPE_COLORS[resolvedType] || 'bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-slate-200';
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const tooltipAlignmentClass =
    align === 'start'
      ? 'left-0'
      : align === 'end'
        ? 'right-0'
        : 'left-1/2 -translate-x-1/2';

  const tooltipId = useId();

  return (
    <span ref={containerRef} className="relative inline-block align-top">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex cursor-pointer rounded-full ${compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1 text-sm'} font-semibold ${colorClass} transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arup-red/60`}
        aria-label={`${code}: ${description}`}
        aria-expanded={isOpen}
        aria-controls={tooltipId}
      >
        {code}
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        aria-hidden={!isOpen}
        className={`pointer-events-none absolute top-full z-20 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-xl border border-arup-dark-gray/15 bg-arup-dark-gray px-3 py-2 text-left text-xs leading-relaxed text-white shadow-xl transition-opacity duration-150 dark:border-white/10 dark:bg-slate-950 ${tooltipAlignmentClass} ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="font-bold">{code}</span>: {description}
      </span>
    </span>
  );
};

export default KSBTooltipBadge;