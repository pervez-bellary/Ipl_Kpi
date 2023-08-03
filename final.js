import csvToJson from "csvtojson"; 
async function find() {
    let matches = await csvToJson().fromFile("matches.csv");
const Arr=matches.map(item => item.team2)
// console.log(Arr)
// CODE TO FIND NUMBER OF MATCHES PLAYED BY EACH TEAM AS TEAM 2
const team_2={};
Arr.forEach(team2 =>{
if(!team_2[team2]){
        team_2[team2]=1;
    }
    else{
        team_2[team2]+=1;
    }
})
// CODE TO FIND NUMBER OF MATCHES PLAYED BY EACH TEAM AS TEAM 1
const Arr1=matches.map(item => item.team1)
// console.log(Arr1)
const team_1={};
Arr1.forEach(team1 =>{
    if(!team_1[team1]){
        team_1[team1]=1;
    }
    else{
    team_1[team1]+=1;
    }
})
// CODE TO FIND TOTAL MATCHES PLAYED BY EACH TEAM
let total = Object.assign({}, team_1); 
for (let key in total) {
    if (total.hasOwnProperty(key)) { 
        total[key] += team_2[key];
    } else { 
        total[key] = team_2[key]; 
    }  
} 
// console.log("TOTAL NUMBER OF TIMES EACH TEAM HAS PLAYED A MATCH")
// console.log(total);
// CODE TO FIND NUMBER OF MATCHES WON BY EACH TEAM
const Arr_winner=matches.map(item => item.winner)
const obj_winner={};
Arr_winner.forEach(winner =>{
    if(!obj_winner[winner]){
        obj_winner[winner]=1;
    }
    else{
        obj_winner[winner]+=1;
    }
})
// console.log("TOTAL NUMBER OF TIMES EACH TEAM HAS WON A MATCH");
// console.log(obj_winner);
// CODE TO FIND WINNING PERCENTAGE OF EACH TEAM
let win_percentage = Object.assign({}, obj_winner); 
for (let key in win_percentage) { 
    if (win_percentage.hasOwnProperty(key)) { 
        win_percentage[key] =(win_percentage[key]/ total[key])*100;
        win_percentage[key] = Math.round(win_percentage[key]);
    } 
}
// console.log("WIN PERCENTAGE OF EACH TEAM")
// console.log(win_percentage);

// CODE TO GRNERATE AN ARRAY OF OBJECT OF EACH TEAM WITH DETAILS
let result = Object.keys(total).map((team) => ({
    team: team,
    totalMatchesPlayed: total[team],
    totalWins: obj_winner[team],
    WinPercentage: win_percentage[team],
    }));      
    console.log(result);
    return result;}
    find();