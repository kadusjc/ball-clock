const FiveMinutesTrack = require('./FiveMinutesTrack')
const TOTAL_BALLS = 5

class MinutesTrack {    
    constructor(ballQueue) {
        this.indicatorQueue = []
        this.indicatorCount = 0
        this.ballQueue = ballQueue
        this.fiveMinutesTrack = new FiveMinutesTrack(ballQueue)
    }

    getOneBallFromQueue () {
        let ball = this.ballQueue.getOneBallFromQueue()
        this.indicatorQueue.push(ball)
    }

    clearIndicatorQueue () {
        this.indicatorQueue = []
        this.indicatorCount = 0
    }

    addOneBallToIndicator () {
        this.indicatorCount++
        this.getOneBallFromQueue()

        if (this.indicatorCount === TOTAL_BALLS) {
           for(let i=this.indicatorQueue.length-1;  i >=0; i--){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
            this.fiveMinutesTrack.addOneBallToIndicator()
            this.clearIndicatorQueue()
        }
    }
}

module.exports = MinutesTrack