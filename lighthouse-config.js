module.exports = {
  extends: 'lighthouse:default',
  settings: {
    emulatedFormFactor: 'desktop',  // Use desktop emulation
    throttling: {
      rttMs: 40,
      throughputKbps: 10 * 1024,
      cpuSlowdownMultiplier: 1,
    },
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  },
};