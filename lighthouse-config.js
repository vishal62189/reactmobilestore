module.exports = {
  ci: {
    collect: {
      url: ['https://www.tatacliq.com/'],  // URLs to test
      settings: {
        formFactor: 'desktop',  // Use 'desktop' or 'mobile'
        screenEmulation: {
          disabled: false,  // Enable screen emulation
          width: 1350,      // Desktop screen width
          height: 940,      // Desktop screen height
          deviceScaleFactor: 1,
          mobile: false,    // Disable mobile emulation
        },
		emulatedUserAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1,
        },
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    "assert": {
      "assertions": {
        "seo": "off"
      }
    },
    upload: {
      target: 'temporary-public-storage',  // Upload results to temporary storage
    },
  },
};
