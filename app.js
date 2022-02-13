function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}






lottery()

function lottery(){
    document.getElementById("sayi").style.backgroundColor = generateRandomColor() ;
    document.getElementById("sayi1").style.backgroundColor = generateRandomColor() ;
    document.getElementById("sayi2").style.backgroundColor = generateRandomColor() ;
    document.getElementById("sayi3").style.backgroundColor = generateRandomColor() ;
    document.getElementById("sayi4").style.backgroundColor = generateRandomColor() ;
    document.getElementById("sayi5").style.backgroundColor = generateRandomColor() ;
   

    let liste = []
    
    for(let i = 0; liste.length < 6 ; i++){
        let number = Math.floor(Math.random()*49+1)
        
        if (liste.includes(number)){
            continue;
        }
        else{
        liste.push(number);
        }

    }
    document.getElementById("sayi").value = liste[0];
    document.getElementById("sayi1").value = liste[1];
    document.getElementById("sayi2").value = liste[2];
    document.getElementById("sayi3").value = liste[3];
    document.getElementById("sayi4").value = liste[4];
    document.getElementById("sayi5").value = liste[5];
    
}




 






 



   


   



