const retry =
  (func, params) =>
  (retriesCount = 1) => {
    let lastOccurredError;

    for (let i = 0; i < retriesCount; i++) {
      try {
        return func(...params);
      } catch (e) {
        lastOccurredError = e;
      }
    }

    throw lastOccurredError;
  };

export default retry;
