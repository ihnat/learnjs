



function isprime(num){
    	 if(n==1)
         return false;
    for(d=2; d*d<=num; d++){ 
        if(num%d==0) 
            return false;
        }
    return true;
    }

 function hundredPrime() {
	var answer=[],
	for (num=2; answer.length<10; num++ ) {
		if (isprime()) {
			answer.push(num);
		}

	}
}


hundredPrime();
