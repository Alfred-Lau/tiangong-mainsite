import React from 'react';
import ng from 'nprogress';

function useAsyncEffect(
  cb: () => Promise<void>,
  deps: React.DependencyList | undefined,
) {
  const wrapper = async () => {
    ng.start();
    await cb();
  };

  React.useEffect(() => {
    wrapper().then(() => ng.done());
  }, deps);
}

export default useAsyncEffect;
