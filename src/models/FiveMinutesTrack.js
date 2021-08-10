const BallTrack = require('./BallTrack')
const HourIndicator = require('./HourTrack')
const TOTAL_BALLS = 12
    
class FiveMinutesTrack  {    
    
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.ballQueue = ballQueue
        this.hourIndicator = new HourIndicator()
    }

    sendBackToQueue () {
        if (this.indicatorCount === TOTAL_BALLS) {
            this.ballQueue.shift()

            this.indicatorCount = 0;
            this.hourIndicator.addOneBallToIndicator()
        }
    }

    addOneBallToIndicator () {
        this.indicatorCount++
        this.sendBackToQueue()
    }

}
module.exports = FiveMinutesTrack