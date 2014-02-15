
// adopted version of Tower of Hanoi (Recursion was used)
// disc - number of discs; src, aux, dst - first, second and third towers.
// More info about Tower of Hanoi: http://en.wikipedia.org/wiki/Tower_of_Hanoi

var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('<div>Move disc ' + disc +
                ' from ' + src + ' to ' + dst +'</div>');
        hanoi(disc - 1, aux, src, dst);
    }
}

hanoi(8, 'first', 'second', 'third');