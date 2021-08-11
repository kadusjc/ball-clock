const BallQueue = require('../src/models/BallQueue')

describe('BallQueue class test', () => {
    describe('.isCycleEnded', () => {
        it('should execute and return true when queue is in order', () => {
            const ballQ = new BallQueue(105)
            expect(ballQ.isCycleEnded()).to.be.eq(true)
        })

        it('should execute and return false when queue is NOT in order', () => {
            const ballQ = new BallQueue(112)
            const q = ballQ.getQueue()
            q[0] = 127
            expect(ballQ.isCycleEnded()).to.be.eq(false)
        })
    })

    describe('.ggiveBackOneBallToQueue', () => {
        it('should send the last queue element to the first position, shifting queue', () => {
            const ballQ = new BallQueue(12)
            expect(ballQ.getQueue().length).to.be.eq(12)
            expect(ballQ.getQueue()[11]).to.be.eq(12)
            expect(ballQ.getQueue()[0]).to.be.eq(1)
            
            ballQ.giveBackOneBallToQueue()
            expect(ballQ.getQueue().length).to.be.eq(12)
            expect(ballQ.getQueue()[11]).to.be.eq(11)
            expect(ballQ.getQueue()[0]).to.be.eq(12)
            expect(ballQ.getQueue()[1]).to.be.eq(1)
        })

        it('should send the last queue element to the first position, shifting queue', () => {
            const ballQ = new BallQueue(3)
            ballQ.giveBackOneBallToQueue()
            expect(ballQ.isCycleEnded()).to.be.eq(false)

            ballQ.giveBackOneBallToQueue()
            expect(ballQ.isCycleEnded()).to.be.eq(false)

            ballQ.giveBackOneBallToQueue()
            expect(ballQ.isCycleEnded()).to.be.eq(true)            
        })
    })
})