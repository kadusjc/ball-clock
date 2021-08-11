const TOTAL_BALLS = 11
    
class HourTrack {       
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.indicatorQueue = []
        this.ballQueue = ballQueue        
    }

    getOneBallFromQueue () {
        let ball = this.ballQueue.getOneBallFromQueue()
        this.indicatorQueue.push(ball)
    }

    clearIndicatorQueue () {
        this.indicatorQueue = []
        this.indicatorCount = 0
    }

    addOneBallToIndicator (oneHourBall) {
        this.indicatorCount++
        this.indicatorQueue.push(oneHourBall)

        if (this.indicatorCount === TOTAL_BALLS + 1) {
            for(let i=this.indicatorQueue.length-1;  i >= 0; i--){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
           this.clearIndicatorQueue()
        }
    }

}
module.exports = HourTrack