const TOTAL_INDICATOR_CAPACITY_BALLS = 11
    
class HourTrack {       
    constructor(ballQueue) {
        this.indicatorCount = 0
        this.indicatorQueue = []
        this.ballQueue = ballQueue             
    }

    clearIndicatorQueue () {
        this.indicatorQueue = []
        this.indicatorCount = 0
    }

    addOneBallToIndicator (oneHourBall) {
        this.indicatorCount++
        this.indicatorQueue.push(oneHourBall)

        if (this.indicatorCount === TOTAL_INDICATOR_CAPACITY_BALLS + 1) {
            this.indicatorQueue = this.indicatorQueue.reverse()

            for(let i=1; i < this.indicatorQueue.length; i++){ 
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }

            const twelfthBall = this.indicatorQueue[0]            
            this.ballQueue.giveBackOneBallToQueue(twelfthBall)
            
            this.clearIndicatorQueue()           
        }
    }

}
module.exports = HourTrack