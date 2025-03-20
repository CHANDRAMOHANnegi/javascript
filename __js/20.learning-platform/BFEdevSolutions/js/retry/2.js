function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    if (maximumRetryCount < 0) {
        throw new Error("maximumRetryCount must be non-negative");
    }
    return fetcher().catch((reason) => {
        if (maximumRetryCount === 0) {
            return Promise.reject(reason);
        }
        return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
    });
}
