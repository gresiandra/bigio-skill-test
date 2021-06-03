function Palindrome() {
    const letters = [];
    
    let input = confirm("ingin input huruf?");

    while (input === true) {
        let letter = prompt('masukan huruf: ');
        letters.push(letter);  
        input = confirm("ingin input huruf?"); 
    }

    console.log("letters: " + letters.toString())

    const finalword = letters.join('') + letters.reverse().join('')

    console.log(finalword)
}

Palindrome()