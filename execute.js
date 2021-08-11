const readline = require("readline")
const BallClock = require('./src/BallClock')

const array = []

module.exports = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    console.log('..:: Type balls queue size separated by ENTER, Type 0 and Enter to finish ::..')

    function runBallClock() {
        array.map((num) => { 
            if (num === '0') return
            let ballClock = new BallClock(num)
            const days = ballClock.turnOnClock()
            console.log(`${num} balls cycles after ${days} days`)    
        })    
    }
    
    rl.on("close", function() {
        runBallClock()

        console.log("\nBYE BYE !!!");
        process.exit(0);
    })

    rl.on('line', function (line) {
        array.push(line.trim())

        if (line.trim() === '0') {
            rl.close()
        }
    })
}