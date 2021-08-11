const { Console } = require("console");

class BallQueue {
    constructor(size) {
        this.queue = []
        this.size = size
        this.#initializeQueue()
        this.currentIndex = 0;    
    }

    #initializeQueue() {               
        for (let i=1; i<=this.size; i++) {
            this.queue.push(i)
        }
    }

    getSize = () => this.size

    getQueue = () => this.queue

    getCurrentIndex = () => this.currentIndex++

    getCurrentElement = () => {
        return this.queue[this.currentIndex]
    }

    isCycleEnded () {
        console.log(this.queue)
        let isSorted = true
        this.queue.forEach((q, i) => {
            isSorted = !!(isSorted && (i == parseInt(q-1)))            
        })
        return isSorted          
    }

    sendBackToQueue () {
        const lastQueueElement = this.queue[this.size-1]
        this.queue.splice(this.size-1, 1)
        this.queue.push(lastQueueElement)       
    }

    getOneBallFromQueue () {
        const currentBall = this.getCurrentElement() 
        this.queue.shift()
        return currentBall
    }

    giveBackOneBallToQueue (ball) {
        console.log('ball ' + ball)
        console.log('queue ' + this.queue)
        this.queue.push(ball)
        console.log('queue aft' + this.queue)
    }
}

module.exports = BallQueue