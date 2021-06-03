function printPascal(number) {

    let stars = "";
    
    //UPPER PART
    for (let index = 1; index <= number; index++) {

        for (let i = 1; i <= number; i++) {
            
            if (i <= index) {
                stars += `${i}` 
            } else {
                stars += " "
            }
                
        }

        for (let j = number-1; j > 0; j--) {
            if (j <= index) {
                stars += `${j}` 
            } else {
                stars += " "
            }
        }

        stars += "\n"

    }

    // BOTTOM PART
    for (let index = number-1; index >= 1; index--) {

        for (let i = 1; i <= number; i++) {
            
            if (i <= index) {
                stars += `${i}` 
            } else {
                stars += " "
            }
                
        }

        for (let j = number-1; j >= 1; j--) {
            
            if (j <= index) {
                stars += `${j}` 
            } else {
                stars += " "
            }
                
        }

        stars += "\n"

    }
    
    console.log(stars);

}

printPascal(prompt('masukan angka: '))