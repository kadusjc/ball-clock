const TOTAL_BALLS = 12
    
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

    addOneBallToIndicator () {
        this.indicatorCount++
        this.getOneBallFromQueue()

        if (this.indicatorCount === TOTAL_BALLS) {
            //for(let i=0; i<this.indicatorQueue.length; i++){
            
            for(let i=this.indicatorQueue.length-1;  i >= 0; i--){
                this.ballQueue.giveBackOneBallToQueue(this.indicatorQueue[i])
            }
           this.clearIndicatorQueue()
        }
    }

}
module.exports = HourTrack