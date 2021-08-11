const { expect } = require('chai')
const BallQueue = require('../src/models/BallQueue')
const FiveMinutesTrack = require('../src/models/FiveMinutesTrack')

describe('FiveMunutesTrack class test', () => {
    describe('.addOneBallToIndicator', () => {
        it('should increment indicator counter and reduce the balls of main queue after 5 minutes', () => {
            let ballQueue = new BallQueue(30)            
            let fiveMinutesTrack = new FiveMinutesTrack(ballQueue)
            console.log('\nOriginal queue: ')
            console.log(ballQueue.getQueue())         

            let ball = ballQueue.getCurrentBallFromQueue()

            fiveMinutesTrack.addOneBallToIndicator(ball)
            expect(fiveMinutesTrack.indicatorCount).to.be.eq(1)
            expect(fiveMinutesTrack.indicatorQueue).to.be.deep.eq([1])            
            console.log('\nTaking one ball ')
            console.log(ballQueue.getQueue())
            
            console.log('\nFive Minutes Indicator: ')         
            console.log(minuteTrack.indicatorQueue)

            console.log('\nBalls queue ')
            console.log(ballQueue.getQueue())
       
        })
        
        it('should give balls back to the queue ( in reverse order ) after five minutes indicator be full', () => {
            let ballQueue = new BallQueue(30)            
            let fiveMinutesTrack = new FiveMinutesTrack(ballQueue)

            console.log('Original queue: ')         
            console.log(ballQueue.getQueue())         

            for (let i=0; i<=10; i++) {
                let ball = ballQueue.getCurrentBallFromQueue()
                fiveMinutesTrack.addOneBallToIndicator(ball)    
            }
            console.log('\nTaking 11 balls from Queue (fulling five minutes Indicator): ')
            console.log(ballQueue.getQueue())

            console.log('\nFive minutes Indicator: ')         
            console.log(ballQueue.getQueue())

            expect(fiveMinutesTrack.indicatorCount).to.be.eq(11)
            expect(fiveMinutesTrack.indicatorQueue).to.be.deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
            console.log('\nBalls Queue: ')         
            console.log(ballQueue.getQueue())            

            expect(ballQueue.getQueue()[0]).to.be.eq(12)
            expect(ballQueue.getQueue()[18]).to.be.eq(30)

            expect(ballQueue.getQueue().length).to.be.eq(19)

            ball = ballQueue.getCurrentBallFromQueue()
            fiveMinutesTrack.addOneBallToIndicator(ball)    

            expect(fiveMinutesTrack.indicatorCount).to.be.eq(0)
            expect(fiveMinutesTrack.indicatorQueue).to.be.deep.eq([])
            expect(ballQueue.getQueue().length).to.be.eq(29)

            expect(ballQueue.getQueue()[0]).to.be.eq(13)

            expect(ballQueue.getQueue()[28]).to.be.eq(2)
            expect(ballQueue.getQueue()[27]).to.be.eq(3)
            expect(ballQueue.getQueue()[26]).to.be.eq(4)
            expect(ballQueue.getQueue()[25]).to.be.eq(5)
            expect(ballQueue.getQueue()[24]).to.be.eq(6)
            expect(ballQueue.getQueue()[23]).to.be.eq(7)
            expect(ballQueue.getQueue()[22]).to.be.eq(8)
            expect(ballQueue.getQueue()[21]).to.be.eq(9)
            expect(ballQueue.getQueue()[20]).to.be.eq(10)
            expect(ballQueue.getQueue()[19]).to.be.eq(11)

            console.log('\nCleaning Five minutes Indicator, giving balls back to the queue in reverse order: ')         
            console.log(ballQueue.getQueue())            
        })
 
    })


})