```js
/**
 * Static Pre-rendering
 * Routes can also use client data loading with clientLoader to avoid server rendering/fetching
 * for their portion of the UI.
 */
import type { Config } from "@react-router/dev/config";

export default {
  // return a list of URLs to prerender at build time
  async prerender() {
    return ["/", "/about", "/contact"];
  },
} satisfies Config;
```