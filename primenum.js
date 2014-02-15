// function which check if 'n' is prime num
// helpful:
// http://www.codecademy.com/ru/courses/javascript-beginner-en-d0Mp0/0/1
// http://habrahabr.ru/post/133037/

function isprime(n){
    if(n==1) // 1 - is not prime number
        return false;
    // перебираем возможные делители от 2 до sqrt(n)
    for(d=2; d*d<=n; d++){ 
        if(n%d==0) 
            return false;
        }
    // если нет нетривиальных делителей, то простое
    return true;
    }

// casual answer with alert using 'isprime()' function
function answer(n) {
    var answer;
    if (isprime(n)) {
        answer = "";
    }
    else {
        answer = 'not';
    }
    return alert('Number ' + n + ' is ' + answer + ' prime!');
}
// example of prime number
answer(11);
// example of not prime number
answer(20);