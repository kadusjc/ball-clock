const HourTrack = require('./HourTrack')
const TOTAL_INDICATOR_CAPACITY_BALLS = 11
    
class FiveMinutesTrack  {    
    
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.indicatorQueue = []
        this.ballQueue = ballQueue
        this.hourTrack = new HourTrack(ballQueue)
    }

    clearIndicatorQueue () {
        this.indicatorQueue = []
        this.indicatorCount = 0
    }

    addOneBallToIndicator (fiveMinutesBall) {
        this.indicatorCount++
        this.indicatorQueue.push(fiveMinutesBall)
                
        if (this.indicatorCount === TOTAL_INDICATOR_CAPACITY_BALLS + 1) {
            this.indicatorQueue = this.indicatorQueue.reverse()
            for(let i=1;  i < this.indicatorQueue.length; i++){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
            const twelfthBall = this.indicatorQueue[0]
            this.hourTrack.addOneBallToIndicator(twelfthBall)
            this.clearIndicatorQueue()
        }
    }

}
module.exports = FiveMinutesTrack