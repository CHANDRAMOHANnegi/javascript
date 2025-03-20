class Heap {
    constructor(comparator) {
        this.queue = [];
        this.comparator = comparator;
    }
    size() {
        return this.queue.length;
    }
    #parent(index) {
        return Math.floor((index - 1) / 2);
    }
    #left(index) {
        return (index * 2) + 1;
    }
    #right(index) {
        return (index * 2) + 2;
    }
    #swap(i, j) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    }
    add(num) {
        this.queue.push(num);
        this.#upHeapify(this.size() - 1);
    }
    remove() {
        if (this.size() === 0) return null;

        this.#swap(0, this.size() - 1);
        const last = this.queue.pop();
        if (this.size() > 1) this.#downHeapify(0);
        return last;
    }
    #upHeapify(index) {
        if (index >= this.size()) return;
        const parent = this.#parent(index);
        if (parent >= 0 && parent < this.size() && this.comparator(this.queue[parent], this.queue[index]) > 0) {
            this.#swap(parent, index);
            this.#upHeapify(parent);
        }
    }
    #downHeapify(index) {
        let minPi = index;
        const li = this.#left(index);
        if (li < this.size() && this.comparator(this.queue[li], this.queue[minPi]) < 0) {
            minPi = li;
        }
        const ri = this.#right(index);
        if (ri < this.size() && this.comparator(this.queue[ri], this.queue[minPi]) < 0) {
            minPi = ri;
        }
        if (minPi != index) {
            this.#swap(minPi, index);
            this.#downHeapify(minPi);
        }
    }
}

var Twitter = function () {
    this.users = {};
    this.tweets = {};
    this.time = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    const tweet = { userId, tweetId, time: this.time++ };
    if (this.tweets[userId]) this.tweets[userId].push(tweet);
    else this.tweets[userId] = [tweet];
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const minHeap = new Heap((a, b) => b.time - a.time);
    const followers = [...(this.users[userId] ?? []), userId];

    followers.forEach(user => {
        (this.tweets[user] ?? []).forEach(t => {
            minHeap.add(t);
        });
    });

    const tweets = [];
    let count = 0;
    while (count < 10 && minHeap.size()) {
        const t = minHeap.remove();
        tweets.push(t);
        count++;
    }

    const ids = tweets.map(tweet => tweet.tweetId);
    console.log('==', ids, tweets);

    return ids;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.users[followerId]) this.users[followerId] = [];
    if (!this.users[followerId].includes(followeeId)) {
        this.users[followerId].push(followeeId);
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.users[followerId]) {
        this.users[followerId] = this.users[followerId].filter(id => id != followeeId);
    }
};
