/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return new Promise((resolve, reject) => {
        const retry = () => {
            fetcher()
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    if (maximumRetryCount > 0) {
                        maximumRetryCount--;
                        retry();
                    } else {
                        reject(error);
                    }
                });
        };
        retry();
    });
}