module.exports = {
  ci: {
    collect: {
      url: ['https://example.com'],  // URLs to test
      settings: {
        formFactor: 'desktop',  // Use 'desktop' or 'mobile'
        screenEmulation: {
          disabled: false,  // Enable screen emulation
          width: 1350,      // Desktop screen width
          height: 940,      // Desktop screen height
          deviceScaleFactor: 1,
          mobile: false,    // Disable mobile emulation
        },
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
