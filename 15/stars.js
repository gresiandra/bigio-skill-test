function printStars(number) {

    let stars = " ";

    //reverse pyramid
    for (let i = 1; i < number; i++) {

        for (let j = number; j >= i; j--) {
            stars += "*"
            stars += " "
        }
        stars += "\n"

        const sisa = number - i;
        const space = number - sisa;

        for (let k = -1; k < space; k++) {
            stars += " "
        }
        
    }

    //pyramid
    for (let m = number; m >= 1; m--) {

        for (let n = number; n >= m; n--) {
            stars += "*"
            stars += " "
        }
        stars += "\n"

        const sisa = number - m;
        const space = number - sisa;

        for (let o = 0; o < space-1; o++) {
            stars += " "
        }
        
    }
    console.log(stars);
}

printStars(prompt('masukan angka: '))