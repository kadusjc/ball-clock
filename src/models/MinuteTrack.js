const FiveMinutesTrack = require('./FiveMinutesTrack')
const TOTAL_INDICATOR_CAPACITY_BALLS = 4

class MinutesTrack {    
    constructor(ballQueue) {
        this.indicatorQueue = []
        this.indicatorCount = 0
        this.ballQueue = ballQueue
        this.fiveMinutesTrack = new FiveMinutesTrack(ballQueue)
    }

    clearIndicatorQueue () {
        this.indicatorQueue = []
        this.indicatorCount = 0
    }

    addOneBallToIndicator () {
        let ball = this.ballQueue.getCurrentBallFromQueue()

        this.indicatorCount++
        this.indicatorQueue.push(ball)        

        if (this.indicatorCount === TOTAL_INDICATOR_CAPACITY_BALLS + 1) {
           this.indicatorQueue = this.indicatorQueue.reverse()

           for(let i=1; i < this.indicatorQueue.length; i++){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
            const fifthBall = this.indicatorQueue[0]
            this.fiveMinutesTrack.addOneBallToIndicator(fifthBall)
            this.clearIndicatorQueue()
        }
    }
}

module.exports = MinutesTrack