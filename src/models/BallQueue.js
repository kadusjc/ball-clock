class BallQueue {
    constructor(size) {
        this.queue = []
        this.size = size
        this.#initializeQueue()    
    }

    #initializeQueue() {               
        for (let i=1; i<=this.size; i++) {
            this.queue.push(i)
        }
    }

    getSize = () => this.size

    getQueue = () => this.queue

    isCycleEnded () {
        let isSorted = true
        this.queue.forEach((q, i) => {
            isSorted = !!(isSorted && (i == parseInt(q-1)))            
        })
        return isSorted          
    }

    sendBackToQueue () {
        const lastQueueElement = this.queue[this.size-1]
        this.queue.splice(this.size-1, 1)
        this.queue.unshift(lastQueueElement)       
    }
}

module.exports = BallQueue