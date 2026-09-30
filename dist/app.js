const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wideScene = window.matchMedia('(min-width: 64.0625rem) and (min-height: 44rem)');
const hero = document.querySelector('[data-scroll-hero]');
const managementGap = document.querySelector('[data-management-gap]');

const clamp = (value, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
const range = (value, start, end) => clamp((value - start) / (end - start));

if (hero && managementGap && !prefersReducedMotion) {
  document.body.classList.add('has-scroll-motion');

  let frameRequested = false;

  function renderScrollScene() {
    frameRequested = false;

    const viewportHeight = Math.max(window.innerHeight, 1);
    const heroBounds = hero.getBoundingClientRect();
    const isWideScene = wideScene.matches;

    document.body.classList.toggle('is-wide-scene', isWideScene);

    if (isWideScene) {
      const heroProgress = clamp(-heroBounds.top / (viewportHeight * 0.78));

      document.body.style.setProperty('--hero-headline-x', `${heroProgress * -14}vw`);
      document.body.style.setProperty('--hero-headline-y', `${heroProgress * -2.5}rem`);
      document.body.style.setProperty('--hero-headline-opacity', String(1 - (heroProgress * 0.82)));
      document.body.style.setProperty('--hero-visual-x', `${-58 - (heroProgress * 8)}%`);
      document.body.style.setProperty('--hero-visual-y', `${heroProgress * 4}rem`);
      document.body.style.setProperty('--hero-visual-scale', String(1 - (heroProgress * 0.12)));
      document.body.style.setProperty('--hero-visual-opacity', String(1 - (heroProgress * 0.88)));
      document.body.style.setProperty('--hero-copy-x', `${heroProgress * 13}vw`);
      document.body.style.setProperty('--hero-copy-y', `${heroProgress * -1.5}rem`);
      document.body.style.setProperty('--hero-copy-opacity', String(1 - (heroProgress * 0.82)));
    } else {
      const heroExit = clamp((viewportHeight * 0.82 - heroBounds.bottom) / (viewportHeight * 0.5));

      document.body.style.setProperty('--hero-headline-x', '0vw');
      document.body.style.setProperty('--hero-headline-y', `${heroExit * -1.25}rem`);
      document.body.style.setProperty('--hero-headline-opacity', String(1 - (heroExit * 0.25)));
      document.body.style.setProperty('--hero-visual-x', '-58%');
      document.body.style.setProperty('--hero-visual-y', `${heroExit * 1.5}rem`);
      document.body.style.setProperty('--hero-visual-scale', String(1 - (heroExit * 0.03)));
      document.body.style.setProperty('--hero-visual-opacity', String(1 - (heroExit * 0.35)));
      document.body.style.setProperty('--hero-copy-x', '0vw');
      document.body.style.setProperty('--hero-copy-y', `${heroExit * -0.75}rem`);
      document.body.style.setProperty('--hero-copy-opacity', String(1 - (heroExit * 0.25)));
    }

    if (!isWideScene) return;

    const gapBounds = managementGap.getBoundingClientRect();
    const scrollableDistance = Math.max(gapBounds.height - viewportHeight, 1);
    const gapProgress = clamp(-gapBounds.top / scrollableDistance);
    const gapEntryProgress = clamp((viewportHeight - gapBounds.top) / (viewportHeight * 0.82));

    const introIn = gapEntryProgress;
    const introOut = range(gapProgress, 0.15, 0.23);
    const comparisonIn = range(gapProgress, 0.2, 0.36);
    const comparisonOut = range(gapProgress, 0.61, 0.74);
    const axisIn = range(gapProgress, 0.36, 0.56);
    const resolutionIn = range(gapProgress, 0.68, 0.87);

    managementGap.style.setProperty('--gap-intro-opacity', String(introIn * (1 - introOut)));
    managementGap.style.setProperty('--gap-intro-y', `${(1 - introIn) * 4 - (introOut * 2.5)}rem`);
    managementGap.style.setProperty('--gap-intro-scale', String(0.97 + (introIn * 0.03) - (introOut * 0.02)));
    managementGap.style.setProperty('--gap-comparison-opacity', String(comparisonIn * (1 - comparisonOut)));
    managementGap.style.setProperty('--gap-left-x', `${(1 - comparisonIn) * -12 - (comparisonOut * 6)}vw`);
    managementGap.style.setProperty('--gap-right-x', `${(1 - comparisonIn) * 12 + (comparisonOut * 6)}vw`);
    managementGap.style.setProperty('--gap-side-y', `${(1 - comparisonIn) * 2 - (comparisonOut * 1.5)}rem`);
    managementGap.style.setProperty('--gap-axis-scale', String(axisIn * (1 - comparisonOut)));
    managementGap.style.setProperty('--gap-resolution-opacity', String(resolutionIn));
    managementGap.style.setProperty('--gap-resolution-y', `${(1 - resolutionIn) * 5}rem`);
    managementGap.style.setProperty('--gap-resolution-clip', `${(1 - resolutionIn) * 100}%`);
  }

  function requestRender() {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(renderScrollScene);
  }

  renderScrollScene();
  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', requestRender);
  wideScene.addEventListener('change', requestRender);
}
