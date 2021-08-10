const BallTrack = require('./BallTrack')
const TOTAL_BALLS = 24
    
class HourTrack {       
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.ballQueue = ballQueue        
    }

    sendBackToQueue () {
        if (this.indicatorCount === TOTAL_BALLS) {
            this.ballQueue.shift()
            this.indicatorCount = 0;            
        }
    }

    addOneBallToIndicator () {
        this.indicatorCount++
        this.sendBackToQueue()
    }

}
module.exports = HourTrack