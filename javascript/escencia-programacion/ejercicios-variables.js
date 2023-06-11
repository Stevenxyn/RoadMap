let a = 10,
    b = 20,
    c = 5;

    //debuggear para corroborar que cada variacion es correcta
    a = a + 3;
    b = b + 4 -a;
    c = a + b + c;
    a = a + c;
    b = 4;
    c = (c + 3) - (b + 2);
    
    console.log(`a = ${a} <br> b = ${b} c = ${c}`);


//deberia dar a42 b4 c26
