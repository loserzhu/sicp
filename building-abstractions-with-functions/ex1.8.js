// SICP JS 1.1.7

function abs(x) {
    return x >= 0 ? x : - x;
}

const error_threshold = 0.01;

function is_good_enough(guess, x) {
    return relative_error(guess, improve(guess, x)) < error_threshold;
}

function relative_error(estimate, reference) {
    return abs(estimate - reference) / reference;
}
// y is your guess and x is the answer. (x/y^2 + 2y) / 3
function util(x, y) {
    return ((x / (y * y)) + 2 * y) / 3;
}

function improve(guess, x) {
    return util(x, guess);
}

function cube_root_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : cube_root_iter(improve(guess, x), x);
}

function cube_root(x){
    return cube_root_iter(x,x);
}

const user_input = process.argv[2];

cube_root(user_input)
console.log("🚀 ~ file: ex1.8.js ~ line 38 ~ cube_root(user_input)", cube_root(user_input))
