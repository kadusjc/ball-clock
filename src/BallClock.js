const BallQueue = require('./models/BallQueue')
const MinutesTrack = require('./models/MinuteTrack')

class BallClock {
    constructor (queueSize) {
        this.queueSize = queueSize        
    }    

    #isValid () {
        console.log('ENTROU IS VALID')
        if (this.queueSize > 127 && this.queueSize < 27 ) { 
            console.log('Deu ruim')
            throw new Error('Queue input invalid. Use values from 27 until 127')
        }
    }

    turnOnClock() {
        this.#isValid()
        this.queue = new BallQueue(this.queueSize)
        
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
        let minuteTrack = new MinutesTrack(this.queue)
        minuteTrack.addOneBallToIndicator()
    }
}

function convertMinutesToDays (minutes) {
    let days = minutes / (60*24)
    return days
}

module.exports = BallClock