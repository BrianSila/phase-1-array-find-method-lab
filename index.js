// code your solution here
function superbowlWin(array){
    let Win = array.find(function(e){
        return e.result === "W"
    }
    )
    if(Win){
        return Win.year
    }
    else{
        return undefined
    }
}
