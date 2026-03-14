let rows = 6;

for (let i = 1; i <= rows; i++) {
    let num = i % 2;  

    for (let j = 1; j <= i; j++) {
        document.writeln(num + " ");
        num = 1 - num;  
    }

    document.writeln("<br>");
}