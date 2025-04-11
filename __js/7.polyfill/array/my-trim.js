
/**
 * @param {string} str
 * @return {string}
 */
function trim(str) {
    let left = 0
    let right = str.length - 1
    const space = [
        ' ',       // ASCII space
        '\u3000',  // IDEOGRAPHIC SPACE
        '\t',      // Tab
        // '\n',      // Newline
        // '\r',      // Carriage return
        // '\f',      // Form feed
        // '\v',      // Vertical tab
        // '\u00A0',  // Non-breaking space
        // '\u2028',  // Line separator
        // '\u2029',  // Paragraph separator
    ];

    while (space.includes(str[left])) {
        left++
    }
    while (space.includes(str[right])) {
        right--
    }
    return str.substring(left, right + 1)
}