const FiveMinutesTrack = require('./FiveMinutesTrack')
const TOTAL_BALLS = 4

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

        if (this.indicatorCount === TOTAL_BALLS + 1) {
           for(let i=this.indicatorQueue.length-1;  i >=1; i--){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
            const fifthBall = this.indicatorQueue[0]
            this.fiveMinutesTrack.addOneBallToIndicator(fifthBall)
            this.clearIndicatorQueue()
        }
    }
}

module.exports = MinutesTrack