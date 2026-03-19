type ScrollToSectionOptions = {
  headerSelector?: string;
  extraOffset?: number;
  fallbackOffset?: number;
  behavior?: ScrollBehavior;
  updateHash?: boolean;
};

export const scrollToSection = (
  targetId: string,
  options: ScrollToSectionOptions = {}
): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const element = document.getElementById(targetId);
  if (!element) {
    return false;
  }

  const {
    headerSelector = 'header',
    extraOffset = 12,
    fallbackOffset = 88,
    behavior = 'smooth',
    updateHash = true,
  } = options;

  const fixedHeader = document.querySelector(headerSelector);
  const headerOffset =
    fixedHeader instanceof HTMLElement ? fixedHeader.offsetHeight + extraOffset : fallbackOffset;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;

  if (updateHash) {
    window.history.replaceState(null, '', `#${targetId}`);
  }

  window.scrollTo({
    top: Math.max(elementTop - headerOffset, 0),
    behavior,
  });

  return true;
};
