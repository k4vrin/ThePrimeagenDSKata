export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;

    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2);
        const v = haystack[middle];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }

    return false;
}
