const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wideScene = window.matchMedia('(min-width: 64.0625rem) and (min-height: 44rem)');
const hero = document.querySelector('[data-scroll-hero]');
const managementGap = document.querySelector('[data-management-gap]');
const whoWeAre = document.querySelector('[data-who-we-are]');
const fieldTeamStory = document.querySelector('[data-field-team-story]');
const operatingProfile = document.querySelector('[data-operating-profile]');
const profileRows = [...document.querySelectorAll('[data-profile-row]')];
const profileFooter = document.querySelector('[data-profile-footer]');
const whatWeDo = document.querySelector('[data-what-we-do]');
const whatIntro = document.querySelector('[data-what-intro]');
const whatStages = [...document.querySelectorAll('[data-what-stage]')];
const whatNodes = [...document.querySelectorAll('[data-what-node]')];
const focusAreas = document.querySelector('[data-focus-areas]');
const focusIntro = document.querySelector('[data-focus-intro]');
const focusScroll = document.querySelector('[data-focus-scroll]');
const focusPanelField = document.querySelector('[data-focus-panels]');
const focusPanels = [...document.querySelectorAll('[data-focus-panel]')];
const focusClosing = document.querySelector('[data-focus-closing]');
const focusFooter = document.querySelector('[data-focus-footer]');

const clamp = (value, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
const range = (value, start, end) => clamp((value - start) / (end - start));

if (hero && managementGap && whoWeAre && fieldTeamStory && operatingProfile && profileRows.length && profileFooter
  && whatWeDo && whatIntro && whatStages.length === 3 && whatNodes.length === 3
  && focusAreas && focusIntro && focusScroll && focusPanelField && focusPanels.length === 3 && focusClosing
  && focusFooter && !prefersReducedMotion) {
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

    if (isWideScene) {
      const gapBounds = managementGap.getBoundingClientRect();
      const scrollableDistance = Math.max(gapBounds.height - viewportHeight, 1);
      const gapProgress = clamp(-gapBounds.top / scrollableDistance);
      const gapEntryProgress = clamp((viewportHeight - gapBounds.top) / (viewportHeight * 0.82));

      const introIn = gapEntryProgress;
      const introOut = range(gapProgress, 0.15, 0.23);
      const comparisonIn = range(gapProgress, 0.2, 0.36);
      const comparisonOut = range(gapProgress, 0.86, 1);
      const axisIn = range(gapProgress, 0.36, 0.56);

      managementGap.style.setProperty('--gap-intro-opacity', String(introIn * (1 - introOut)));
      managementGap.style.setProperty('--gap-intro-y', `${(1 - introIn) * 4 - (introOut * 2.5)}rem`);
      managementGap.style.setProperty('--gap-intro-scale', String(0.97 + (introIn * 0.03) - (introOut * 0.02)));
      managementGap.style.setProperty('--gap-comparison-opacity', String(comparisonIn * (1 - comparisonOut)));
      managementGap.style.setProperty('--gap-left-x', `${(1 - comparisonIn) * -12 - (comparisonOut * 6)}vw`);
      managementGap.style.setProperty('--gap-right-x', `${(1 - comparisonIn) * 12 + (comparisonOut * 6)}vw`);
      managementGap.style.setProperty('--gap-side-y', `${(1 - comparisonIn) * 2 - (comparisonOut * 1.5)}rem`);
      managementGap.style.setProperty('--gap-axis-scale', String(axisIn * (1 - comparisonOut)));
    }

    const whoBounds = whoWeAre.getBoundingClientRect();
    const whoEntry = clamp((viewportHeight - whoBounds.top) / (viewportHeight * 0.78));
    let whoLabelIn;
    let whoHeadlineIn;
    let whoCopyPrimaryIn;
    let whoCopySecondaryIn;
    let whoExit = 0;

    if (isWideScene) {
      const whoScrollableDistance = Math.max(whoBounds.height - viewportHeight, 1);
      const whoProgress = clamp(-whoBounds.top / whoScrollableDistance);

      whoLabelIn = range(whoEntry, 0.02, 0.32);
      whoHeadlineIn = range(whoEntry, 0.12, 0.9);
      whoCopyPrimaryIn = range(whoProgress, 0.04, 0.3);
      whoCopySecondaryIn = range(whoProgress, 0.25, 0.55);
      whoExit = range(whoProgress, 0.82, 1);
    } else {
      whoLabelIn = range(whoEntry, 0, 0.25);
      whoHeadlineIn = range(whoEntry, 0.1, 0.55);
      whoCopyPrimaryIn = range(whoEntry, 0.42, 0.75);
      whoCopySecondaryIn = range(whoEntry, 0.58, 0.92);
    }

    const whoPresence = 1 - whoExit;
    const whoHeadlineLift = isWideScene ? whoCopyPrimaryIn * 0.85 : 0;
    whoWeAre.style.setProperty('--who-label-opacity', String(whoLabelIn * whoPresence));
    whoWeAre.style.setProperty('--who-label-y', `${(1 - whoLabelIn) * 1.5 - (whoExit * 1.5)}rem`);
    whoWeAre.style.setProperty('--who-headline-opacity', String(whoHeadlineIn * whoPresence));
    whoWeAre.style.setProperty('--who-headline-y', `${(1 - whoHeadlineIn) * 4 - whoHeadlineLift - (whoExit * 2)}rem`);
    whoWeAre.style.setProperty('--who-headline-clip', `${(1 - whoHeadlineIn) * 100}%`);
    whoWeAre.style.setProperty('--who-copy-primary-opacity', String(whoCopyPrimaryIn * whoPresence));
    whoWeAre.style.setProperty('--who-copy-primary-y', `${(1 - whoCopyPrimaryIn) * 1.75 - (whoExit * 1.5)}rem`);
    whoWeAre.style.setProperty('--who-copy-primary-clip', `${(1 - whoCopyPrimaryIn) * 100}%`);
    whoWeAre.style.setProperty('--who-copy-secondary-opacity', String(whoCopySecondaryIn * whoPresence));
    whoWeAre.style.setProperty('--who-copy-secondary-y', `${(1 - whoCopySecondaryIn) * 1.75 - (whoExit * 1.5)}rem`);
    whoWeAre.style.setProperty('--who-copy-secondary-clip', `${(1 - whoCopySecondaryIn) * 100}%`);

    const teamBounds = fieldTeamStory.getBoundingClientRect();
    let teamProgress;

    if (isWideScene) teamProgress = clamp((viewportHeight * 0.9 - teamBounds.top) / (viewportHeight * 0.72));
    else teamProgress = clamp((viewportHeight * 0.9 - teamBounds.top) / (viewportHeight * 0.45));

    const teamReveal = range(teamProgress, 0.04, 0.9);
    const teamCaptionIn = range(teamProgress, 0.62, 0.96);
    fieldTeamStory.style.setProperty('--team-image-opacity', String(range(teamProgress, 0, 0.16)));
    fieldTeamStory.style.setProperty('--team-image-y', `${(1 - teamReveal) * 2}rem`);
    fieldTeamStory.style.setProperty('--team-clip-x', `${(1 - teamReveal) * 100}%`);
    fieldTeamStory.style.setProperty('--team-caption-opacity', String(teamCaptionIn));
    fieldTeamStory.style.setProperty('--team-caption-y', `${(1 - teamCaptionIn) * 0.75}rem`);

    const profileBounds = operatingProfile.getBoundingClientRect();
    const profileLabelIn = clamp((viewportHeight * 0.88 - profileBounds.top) / (viewportHeight * 0.28));
    operatingProfile.style.setProperty('--profile-label-opacity', String(profileLabelIn));
    operatingProfile.style.setProperty('--profile-label-y', `${(1 - profileLabelIn) * 1.75}rem`);

    let profileFooterIn = 0;
    profileRows.forEach((row, index) => {
      const rowBounds = row.getBoundingClientRect();
      const rowIn = clamp((viewportHeight * 0.94 - rowBounds.top) / (viewportHeight * 0.22));
      row.style.setProperty('--profile-row-opacity', String(rowIn));
      row.style.setProperty('--profile-row-y', `${(1 - rowIn) * 2.75}rem`);
      row.style.setProperty('--profile-line-scale', String(rowIn));

      if (index === profileRows.length - 1) profileFooterIn = rowIn;
    });

    profileFooter.style.setProperty('--profile-footer-opacity', String(profileFooterIn));
    profileFooter.style.setProperty('--profile-footer-y', `${(1 - profileFooterIn) * 1.25}rem`);

    const whatBounds = whatWeDo.getBoundingClientRect();

    if (isWideScene) {
      const whatScrollableDistance = Math.max(whatBounds.height - viewportHeight, 1);
      const whatProgress = clamp(-whatBounds.top / whatScrollableDistance);
      const whatEntry = clamp((viewportHeight - whatBounds.top) / (viewportHeight * 0.82));
      const whatIntroIn = whatEntry;
      const whatIntroOut = range(whatProgress, 0.12, 0.22);
      const whatIntroPresence = whatIntroIn * (1 - whatIntroOut);
      const progressIn = range(whatProgress, 0.16, 0.25);
      const progressOut = range(whatProgress, 0.96, 1);
      const stageWindows = [
        [0.2, 0.46],
        [0.43, 0.7],
        [0.67, 0.96],
      ];

      whatWeDo.style.setProperty('--what-intro-opacity', String(whatIntroPresence));
      whatWeDo.style.setProperty('--what-intro-y', `${(1 - whatIntroIn) * 4 - (whatIntroOut * 2)}rem`);
      whatWeDo.style.setProperty('--what-intro-clip', `${(1 - whatIntroIn) * 100}%`);
      whatWeDo.style.setProperty('--what-mark-opacity', String(whatIntroPresence * 0.09));
      whatWeDo.style.setProperty('--what-progress-opacity', String(progressIn * (1 - progressOut)));
      whatWeDo.style.setProperty('--what-progress-scale', String(range(whatProgress, 0.22, 0.88)));

      whatStages.forEach((stage, index) => {
        const [start, end] = stageWindows[index];
        const stageIn = range(whatProgress, start, start + 0.09);
        const stageOut = range(whatProgress, end - 0.05, end);
        const stagePresence = stageIn * (1 - stageOut);

        stage.style.setProperty('--what-stage-opacity', String(stagePresence));
        stage.style.setProperty('--what-stage-y', `${(1 - stageIn) * 4 - (stageOut * 2)}rem`);
        stage.style.setProperty('--what-stage-clip', `${(1 - stageIn) * 100}%`);
        whatNodes[index].style.setProperty('--what-node-opacity', String(0.32 + (stagePresence * 0.68)));
      });

      const whatFooterIn = range(whatProgress, 0.88, 0.97);
      whatWeDo.style.setProperty('--what-footer-opacity', String(whatFooterIn));
      whatWeDo.style.setProperty('--what-footer-y', `${(1 - whatFooterIn) * 1.25}rem`);
    } else {
      const introBounds = whatIntro.getBoundingClientRect();
      const introIn = clamp((viewportHeight * 0.9 - introBounds.top) / (viewportHeight * 0.52));

      whatWeDo.style.setProperty('--what-intro-opacity', String(introIn));
      whatWeDo.style.setProperty('--what-intro-y', `${(1 - introIn) * 3}rem`);
      whatWeDo.style.setProperty('--what-intro-clip', `${(1 - introIn) * 100}%`);
      whatWeDo.style.setProperty('--what-mark-opacity', String(introIn * 0.09));

      let finalStageIn = 0;
      whatStages.forEach((stage, index) => {
        const stageBounds = stage.getBoundingClientRect();
        const stageIn = clamp((viewportHeight * 0.9 - stageBounds.top) / (viewportHeight * 0.42));

        stage.style.setProperty('--what-stage-opacity', String(stageIn));
        stage.style.setProperty('--what-stage-y', `${(1 - stageIn) * 3}rem`);
        stage.style.setProperty('--what-stage-clip', `${(1 - stageIn) * 100}%`);
        if (index === whatStages.length - 1) finalStageIn = stageIn;
      });

      whatWeDo.style.setProperty('--what-footer-opacity', String(finalStageIn));
      whatWeDo.style.setProperty('--what-footer-y', `${(1 - finalStageIn) * 1.25}rem`);
    }

    const focusIntroBounds = focusIntro.getBoundingClientRect();
    const focusIntroIn = clamp((viewportHeight * 0.9 - focusIntroBounds.top) / (viewportHeight * 0.55));
    const focusCopyIn = range(focusIntroIn, 0.28, 0.78);

    focusAreas.style.setProperty('--focus-intro-opacity', String(focusIntroIn));
    focusAreas.style.setProperty('--focus-intro-y', `${(1 - focusIntroIn) * 3.25}rem`);
    focusAreas.style.setProperty('--focus-intro-clip', `${(1 - focusIntroIn) * 100}%`);
    focusAreas.style.setProperty('--focus-copy-opacity', String(focusCopyIn));
    focusAreas.style.setProperty('--focus-copy-y', `${(1 - focusCopyIn) * 2}rem`);

    if (isWideScene) {
      const focusBounds = focusScroll.getBoundingClientRect();
      const focusScrollableDistance = Math.max(focusBounds.height - viewportHeight, 1);
      const focusProgress = clamp(-focusBounds.top / focusScrollableDistance);
      const focusPosition = range(focusProgress, 0.05, 0.93) * (focusPanels.length - 1);
      const focusWeights = focusPanels.map((panel, index) => {
        const presence = clamp(1 - Math.abs(focusPosition - index));
        const detailPresence = clamp(1 - (Math.abs(focusPosition - index) * 1.4));

        panel.style.setProperty('--focus-active', String(presence));
        panel.style.setProperty('--focus-detail-opacity', String(detailPresence));
        return `${(1 + (presence * 4)).toFixed(3)}fr`;
      });

      focusPanelField.style.setProperty('--focus-columns', focusWeights.join(' '));

      const focusClosingIn = range(focusProgress, 0.83, 0.94);
      const focusFooterIn = range(focusProgress, 0.9, 0.98);
      focusAreas.style.setProperty('--focus-closing-opacity', String(focusClosingIn));
      focusAreas.style.setProperty('--focus-closing-y', `${(1 - focusClosingIn) * 1.25}rem`);
      focusAreas.style.setProperty('--focus-footer-opacity', String(focusFooterIn));
      focusAreas.style.setProperty('--focus-footer-y', `${(1 - focusFooterIn) * 1.25}rem`);
    } else {
      let finalFocusIn = 0;

      focusPanels.forEach((panel, index) => {
        const panelBounds = panel.getBoundingClientRect();
        const panelIn = clamp((viewportHeight * 0.9 - panelBounds.top) / (viewportHeight * 0.44));

        panel.style.setProperty('--focus-active', String(panelIn));
        panel.style.setProperty('--focus-detail-opacity', String(panelIn));
        if (index === focusPanels.length - 1) finalFocusIn = panelIn;
      });

      focusAreas.style.setProperty('--focus-closing-opacity', String(finalFocusIn));
      focusAreas.style.setProperty('--focus-closing-y', `${(1 - finalFocusIn) * 1.25}rem`);
      focusAreas.style.setProperty('--focus-footer-opacity', String(finalFocusIn));
      focusAreas.style.setProperty('--focus-footer-y', `${(1 - finalFocusIn) * 1.25}rem`);
    }
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
