// random integer generator
const randn = (n: number) => Math.trunc(Math.random() * n);

function range(start: number, end: number) : number {
    if (end <= start) {
	return start;
    }

    return randn(end - start) + start;
}

// charRange(start, end) returns random ASCII character between start and end inclusive
function charRange(start: string, end: string) : string {
    let a = start.charCodeAt(0), b = end.charCodeAt(0);
    if (b <= a) {
	return "";
    }
    return String.fromCharCode(range(a, b + 1));
}

// letters(n) returns a string of random English letters of length n
function letters(n: number) : string {
    return new Array(n).fill('').map(() => charRange('a', 'z')).join('');
}

function digits(n: number) : string {
    return new Array(n).fill('').map(() => charRange('0', '9')).join('');
}

function hex(n: number) : string {
    return new Array(n).fill(0).map(() => randn(256).toString(16).padStart(2, '0')).join('');
}

// choice(array) returns a random element from array.
// returns null if array is empty
function choice<T>(array: T[]) : T | null {
    return array.length == 0? null : array[randn(array.length)];
}

module.exports = {
    randn,
    range,
    letters,
    digits,
    hex,
    choice,
}
