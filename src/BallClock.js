const BallQueue = require('./models/BallQueue')
const MinutesTrack = require('./models/MinuteTrack')

class BallClock {
    constructor (queueSize) {       
        this.#isValid(queueSize)
        this.queue = new BallQueue(queueSize)
        this.minuteTrack = new MinutesTrack(this.queue)        
    }    

    #isValid (queueSize) {
        const queueSizeInt = parseInt(queueSize);

        if (!Number.isInteger(queueSizeInt)) {
            throw new Error('Queue input invalid. Use values from 27 until 127')
        }
    
        const isValid = queueSizeInt <= 127 && queueSizeInt >= 27 
        if (!isValid) { 
            throw new Error('Queue input invalid. Use values from 27 until 127')
        }
        this.queueSize = queueSizeInt
    }

    turnOnClock() {        
        let cyclesCounter = 0
        let isEnded = false
        do {            
            this.#sendMinuteBallToItsTrack()
            cyclesCounter++
            isEnded = this.queue.isCycleEnded()
        } while(!isEnded){}
        
        const totalDays = convertCyclesToDays(cyclesCounter++)
        return totalDays
    }

    #sendMinuteBallToItsTrack () {        
        this.minuteTrack.addOneBallToIndicator()
    }
}

function convertCyclesToDays (cycles) {
    let days = cycles / (60 * 24)
    return days
}

module.exports = BallClock