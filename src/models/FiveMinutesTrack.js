const HourTrack = require('./HourTrack')
const TOTAL_BALLS = 12
    
class FiveMinutesTrack  {    
    
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.indicatorQueue = []
        this.ballQueue = ballQueue
        this.hourTrack = new HourTrack(ballQueue)
    }

    getOneBallFromQueue () {
        let ball = this.ballQueue.getOneBallFromQueue()
        this.indicatorQueue.unshift(ball)
    }

    clearIndicatorQueue () {
        this.indicatorQueue = []
        this.indicatorCount = 0
    }

    addOneBallToIndicator () {
        this.indicatorCount++
        this.getOneBallFromQueue()

        if (this.indicatorCount === TOTAL_BALLS) {
            for(let i=this.indicatorQueue.length-1;  i >= 0; i--){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
            this.hourTrack.addOneBallToIndicator()
            this.clearIndicatorQueue()
        }
    }

}
module.exports = FiveMinutesTrack