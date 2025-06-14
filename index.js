//let hqBlock = 42;

function distanceFromHqInBlocks(block){
    let hqBlock = 42;    
    return Math.abs(block - hqBlock)   
    
}
function distanceFromHqInFeet(feet){
//each block is 264 feet long
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start, dest){
    return Math.abs(start - dest) * 264
} 
 

function calculatesFarePrice(calcStart, calcEnd){
    var dist = distanceTravelledInFeet(calcStart, calcEnd)
    if (dist <=400){
        return 0;
    } else if (dist >=400 && dist <= 2000){
        return (dist - 400) * 0.02
    } else if (dist > 2000 && dist <= 2500){
        return 25 
    } else if (dist > 2500){
        return "cannot travel that far"
    }

}