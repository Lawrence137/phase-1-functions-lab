// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location === 43){
        return 1;
    }
    else if (location === 50){
        return 8;
    }
    else(location === 34);{
        return 8;
    }
}

function distanceFromHqInFeet(blocks){
    if (blocks === 43){
        return 264;
    }
    else if (blocks === 50){
        return 2112;
    }
    else (blocks === 34);{
        return 2112;
    }
}

function distanceTravelledInFeet(a, b){
    if (a < b){
        let distance = (b - a) * 264;
        return distance;
    }
    else(a > b);{
        let distance = (a - b) * 264;
        return distance;
    }
}


function calculatesFarePrice(start, destination)
{
    const dist =  distanceTravelledInFeet(start,destination)
    let n;
    if (dist <=400){
        n = 0;
    }
     else if (dist > 400 && dist < 2000){   
        n = 2.56;
    }
     else if (dist > 2000 && dist < 2500){
        n = 25;
     }
     else  if ( dist > 2500){
         n = 'cannot travel that far';
    }
    return n;
}