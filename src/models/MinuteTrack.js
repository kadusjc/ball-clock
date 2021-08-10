const FiveMinutesIndicator = require('./FiveMinutesTrack')
const TOTAL_BALLS = 5

class MinutesTrack {    
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.ballQueue = ballQueue
        this.fiveMinutesIndicator = new FiveMinutesIndicator()
    }

    sendBackToQueue () {
        if (this.indicatorCount === 5) {
            this.ballQueue.sendBackToQueue()

            this.indicatorCount = 0;
            this.fiveMinutesIndicator.addOneBallToIndicator()
        }
    }

    addOneBallToIndicator () {
        this.indicatorCount++
        this.sendBackToQueue()
    }
}

module.exports = MinutesTrack