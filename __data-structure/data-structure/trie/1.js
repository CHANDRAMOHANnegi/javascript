
const TrieNode = function () {
    this.children = {}
    this.endOfWord = false
}

const Trie = function () {
    this.root = new TrieNode()
}

Trie.prototype.insert = function (word) {
    let current = this.root

    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!(char in current.children)) {
            current.children[char] = new TrieNode()
        }
        current = current.children[char]
    }
    current.endOfWord = true
}

Trie.prototype.search = function (word) {
    let current = this.root

    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!(char in current.children)) {
            return false
        }
        current = current.children[char]
    }
    return current.endOfWord
}

Trie.prototype.startsWith = function (prefix) {
    let current = this.root

    /**
     * Check full prefix
     * */ 

    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i]
        if (!(char in current.children)) {
            return false
        }
        current = current.children[char]
    }
    return true
}

// Your Trie object will be instantiated and called as such:
var trie = new Trie()
const word = "app"
const prefix = "ap"
trie.insert(word)
const param_2 = trie.search(word)
const param_3 = trie.startsWith(prefix)
const param_4 = trie.startsWith("bc")
console.log({ param_2, param_3, param_4 });
