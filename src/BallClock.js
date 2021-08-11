const BallQueue = require('./models/BallQueue')
const MinutesTrack = require('./models/MinuteTrack')

class BallClock {
    constructor (queueSize) {
        this.queueSize = parseInt(queueSize)
    }    

    #isValid () {
        const isValid = this.queueSize <= 127 && this.queueSize >= 27 
        if (!isValid) { 
            throw new Error('Queue input invalid. Use values from 27 until 127')
        }
    }

    turnOnClock() {
        this.#isValid()
        this.queue = new BallQueue(this.queueSize)
        this.minuteTrack = new MinutesTrack(this.queue)
        
        let totalMinutes = 0
        let isEnded = false
        do {
            this.#countOneMinute()
            isEnded = this.queue.isCycleEnded() 
            totalMinutes++
        } while(!isEnded)
        
        console.log('Total Minutes ', totalMinutes)
        const totalDays = convertMinutesToDays(totalMinutes)
        console.log('Total Days ', totalDays)
        return totalDays
    }

    #countOneMinute () {        
        this.minuteTrack.addOneBallToIndicator()
    }
}

function convertMinutesToDays (minutes) {
    let days = minutes / (60*24)
    return days
}

module.exports = BallClock