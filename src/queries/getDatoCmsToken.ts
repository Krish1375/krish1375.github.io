// src/queries/getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  // Get the current hostname where the app is running
  const hostname = window.location.hostname;

  // Determine the correct DatoCMS API token based on the hostname
  switch (hostname) {
    // --- Production Hostnames ---
    case 'sumanthsamala.com':             // Original main domain
    case 'ror.sumanthsamala.com':         // Original Ruby on Rails domain
    case 'java.sumanthsamala.com':        // Original Java domain
    case 'frontend.sumanthsamala.com':    // Original Frontend domain
    case 'node.sumanthsamala.com':        // Original Node domain
    case 'krish1375.github.io':           // *** ADDED: Your GitHub Pages domain ***
    // --- Development Hostnames ---
    case 'localhost':                     // Default localhost
    case 'ror.localhost':                 // Ruby on Rails localhost alias
    case 'java.localhost':                // Java localhost alias
    case 'frontend.localhost':            // Frontend localhost alias
    case 'node.localhost':                // Node localhost alias
      // Return the default/primary token for these hostnames
      // NOTE: Ensure this is the correct token for the content you want to display
      //       on krish1375.github.io. You might need to use a different token
      //       if you have separate DatoCMS projects/environments.
      return '41c30f33cba9ff368371a8f58802fd'; // Default/Primary Token

    // --- Optional: Keep separate tokens if needed for other original subdomains ---
    // (You can remove these if krish1375.github.io should use the default token above)
    // case 'java.sumanthsamala.com':
    // case 'java.localhost':
    //   return '9cfd2ca8c261429a7caa55ea0587a7'; // Token B (Example)

    // case 'frontend.sumanthsamala.com':
    // case 'frontend.localhost':
    //   return 'ee1351644972ae7c3b89db9cf7314b'; // Token C (Example)

    // case 'node.sumanthsamala.com':
    // case 'node.localhost':
    //   return 'adbb69807c5a85d07b5d557d7b0ce0'; // Token D (Example)

    // --- Default Case ---
    default:
      // If the hostname doesn't match any known cases, throw an error.
      console.error(`No DatoCMS token configured for hostname: ${hostname}`);
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
