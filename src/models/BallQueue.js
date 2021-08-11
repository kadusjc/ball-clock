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
        let isSorted = true
        this.queue.forEach((q, i) => {
            isSorted = !!(isSorted && (i == parseInt(q-1)))            
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