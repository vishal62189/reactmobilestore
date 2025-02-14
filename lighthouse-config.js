module.exports = {
  ci: {
    collect: {
      url: ['https://example.com'],  // URLs to test
      settings: {
        emulatedFormFactor: 'desktop',  // Use desktop emulation
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1,
        },
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',  // Use a Lighthouse preset for assertions
    },
    upload: {
      target: 'temporary-public-storage',  // Upload results to temporary storage
    },
  },
};