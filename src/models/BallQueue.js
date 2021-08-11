const { Console } = require("console");

class BallQueue {
    constructor(size) {
        this.queue = []        
        this.queueInitialState = []

        this.size = size
        this.#initializeQueue()
        this.currentIndex = 0;    
    }

    #initializeQueue() {               
        for (let i=1; i<=this.size; i++) {
            this.queue.push(i)
            this.queueInitialState.push(i)
        }
    }

    getSize = () => this.size

    getQueue = () => this.queue

    isCycleEnded () {
        let isSorted = true
        this.queueInitialState.forEach((queueInitialStateElement, i) => {
            isSorted = !!(isSorted && queueInitialStateElement === this.queue[i])            
        })
        return isSorted          
    }

    getOneBallFromQueue () {
        return this.queue.shift()
    }

    giveBackOneBallToQueue (ball) {
        this.queue.push(ball)
    }
}

module.exports = BallQueue