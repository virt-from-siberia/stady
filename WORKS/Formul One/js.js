

let mshumaher = {
    points : [],
    wins : [],
    podiums : [],
    champions : [],
    viseChampions : [],
    euroPoints : [],
    champoionships : [],
    getPoints: function () {
        if(localStorage.getItem('mshumaher-points') != null){
            mshumaher.points = JSON.parse(localStorage.getItem('mshumaher-points'));
        }else{
            let getPoints = prompt("Enter points");
            mshumaher.points.push(getPoints);
            savePointsToLocalStorage();
        }
    }
};
mshumaher.getPoints();
console.log(mshumaher.points);

function savePointsToLocalStorage(){
    localStorage.setItem('mshumaher-points', JSON.stringify(mshumaher.points));
}





