// SICP JS 1.1.7

function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

// replaced
// function is_good_enough(guess, x) {
//     return abs(square(guess) - x) < 0.001;
// }

// replacing an absolute tolerance with a relative tolerance.
const error_threshold = 0.01;
function is_good_enough(guess, x) {
    return relative_error(guess, improve(guess, x)) < error_threshold;
}

function relative_error(estimate, reference) {
    return abs(estimate - reference) / reference;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

const user_input = process.argv[2];
console.log(`"🚀 ~ file: ex1.7.js ~ line 45 ~ sqrt(${user_input})"`, sqrt(user_input))