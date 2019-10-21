

for (let i =99;  i > 0; i--){
    let j = i - 1;
   
    if(i > 1){
        console.log(i+' bottles of beer on the wall, '+i+' bottles of beer.');
 
    }
    else{
        console.log(i+' bottle of beer on the wall, '+i+' bottle of beer.');

    }
    if (j > 1 ){
        console.log('Take one down and pass it around, '+j+' bottles of beer on the wall.');
        console.log(' ');
    }
    else if(j == 1 ){
        console.log('Take one down and pass it around, '+j+' bottle of beer on the wall.');
        console.log(' ');
    }

   
    else {
        console.log('Take one down and pass it around, no more bottles of beer on the wall.');

    }
    

}

console.log(' ');
console.log('No more bottles of beer on the wall, no more bottles of beer.');
console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');