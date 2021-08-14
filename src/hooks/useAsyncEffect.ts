import React from 'react';

function useAsyncEffect(
  cb: () => Promise<void>,
  deps: React.DependencyList | undefined,
) {
  const wrapper = async () => {
    await cb();
  };

  React.useEffect(() => {
    wrapper();
  }, deps);
}

export default useAsyncEffect;
