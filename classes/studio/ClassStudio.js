//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;    
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let mean = sum / this.scores.length;
        return Math.round(mean * 10) / 10;
    }

    status() {
        let scoreAverage = this.average();
//Why did the score average need to be stored as something else in order to work correctly? 
        if (scoreAverage >= 90) {
            return "Accepted!";
        } else if (scoreAverage >= 80) {
            return "Reserve";
        } else if (scoreAverage >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }

}

const bubba = new CrewCandidate("Bubba", 135, [88, 85, 90]);
const merry = new CrewCandidate("Merry", 1.5, [93, 88, 97]);
const glad = new CrewCandidate("Glad", 225, [75, 78, 62]);

console.log(bubba);
console.log(merry);
console.log(glad);

bubba.addScore(83);
console.log(bubba.scores);

console.log(merry.average());


console.log(`${bubba.name} earned an average test score of ${bubba.average()} and has a status of ${bubba.status()}`)
console.log(`${merry.name} earned an average test score of ${merry.average()} and has a status of ${merry.status()}`)

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

let j = 0
while (glad.status() === "Probationary") {
    glad.addScore(100)
    j++
}
console.log(`${glad.name} needs ${j} perfect tests to reach Reserve status.`)
let k = 0;
while (glad.status() === "Reserve") {
    glad.addScore(100);
    k++
}
console.log(`${glad.name} needs ${j + k} perfect tests to reach Accepted status.`)
console.log(glad.average());

console.log(`${glad.name} earned an average test score of ${glad.average()} and has a status of ${glad.status()}`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.