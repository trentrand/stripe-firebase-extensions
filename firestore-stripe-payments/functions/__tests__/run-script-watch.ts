const concurrently = require('concurrently');

import { setupProxy, cleanupProxy } from './helpers/setupProxy';

(async () => {
  // const proxyId = await setupProxy();

  const { result } = await concurrently(
    [
      {
        command: 'bun run exec:emulator:watch',
        name: 'testing',
      },
    ],
    {}
  );

  // await result.then(async () => {
  //   await cleanupProxy(proxyId);
  //   console.log('Removed webhook ', proxyId);
  //   process.exit(0);
  // });
})();
