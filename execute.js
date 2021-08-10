const readline = require("readline")
const BallClock = require('./src/BallClock')

const array = []

module.exports = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    console.log('..:: Type balls separated by ENTER, 0 to finish ::..')

    function runBallClock() {
        console.log(`Computing ${array}... `)

        array.map((num) => { 
            if (num === '0') return
            console.log('NUM ' + num)
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