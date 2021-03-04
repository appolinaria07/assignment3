for (let a = 1; a <= 100; a++) {
    if (a % 15 === 0) {
        document.write('Marco! Polo! <br>');
    }   else if (a % 3 === 0) {
        document.write('Marco!<br>');
    } else if (a % 5 === 0) {
        document.write('Polo!<br>');
    } else {
        document.write(`${a} <br>`);
    }
}


 