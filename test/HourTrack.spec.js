const { expect } = require('chai')
const BallQueue = require('../src/models/BallQueue')
const HourTrack = require('../src/models/HourTrack')

describe('HourTrack class test', () => {
    describe('.addOneBallToIndicator', () => {
        it('should increment indicator counter and reduce the balls of main queue after 60 minutes', () => {
            let ballQueue = new BallQueue(30)            
            let hourTrack = new HourTrack(ballQueue)
            console.log('\nOriginal queue: ')
            console.log(ballQueue.getQueue())         

            let ball = ballQueue.getCurrentBallFromQueue()

            hourTrack.addOneBallToIndicator(ball)
            expect(hourTrack.indicatorCount).to.be.eq(1)
            expect(hourTrack.indicatorQueue).to.be.deep.eq([1])            
            console.log('\nTaking one ball ')
            console.log(ballQueue.getQueue())
            
            console.log('\Hour Minutes Indicator: ')         
            console.log(hourTrack.indicatorQueue)

            console.log('\nBalls queue ')
            console.log(ballQueue.getQueue())       
        })
        
        it('should give balls back to the queue ( in reverse order ) after One Hour indicator be full', () => {
            let ballQueue = new BallQueue(30)            
            let hourTrack = new HourTrack(ballQueue)

            console.log('Original queue: ')         
            console.log(ballQueue.getQueue())         

            for (let i=0; i<=10; i++) {
                let ball = ballQueue.getCurrentBallFromQueue()
                hourTrack.addOneBallToIndicator(ball)    
            }
            
            console.log('\nTaking 11 balls from Queue (fulling One Hour Indicator): ')            
            console.log(ballQueue.getQueue())

            console.log('\One Hour Indicator: ')         
            console.log(hourTrack.indicatorQueue)

            expect(hourTrack.indicatorCount).to.be.eq(11)
            expect(hourTrack.indicatorQueue).to.be.deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
            console.log('\nBalls Queue: ')         
            console.log(ballQueue.getQueue())            

            expect(ballQueue.getQueue()[0]).to.be.eq(12)
            expect(ballQueue.getQueue()[18]).to.be.eq(30)

            expect(ballQueue.getQueue().length).to.be.eq(19)


            console.log('\nTaking one more ball to run on clock....\nMust fall into Hours Track and give all five minutes indicator balls back to queue')          
            ball = ballQueue.getCurrentBallFromQueue()
            hourTrack.addOneBallToIndicator(ball)    
            console.log(ballQueue.getQueue())

            console.log('\nOne Hour Indicator: ')         
            console.log(hourTrack.indicatorQueue)

            expect(hourTrack.indicatorCount).to.be.eq(0)
            expect(hourTrack.indicatorQueue).to.be.deep.eq([])
            expect(ballQueue.getQueue().length).to.be.eq(30)

            expect(ballQueue.getQueue()[0]).to.be.eq(13)

            expect(ballQueue.getQueue()[28]).to.be.eq(1)
            expect(ballQueue.getQueue()[27]).to.be.eq(2)
            expect(ballQueue.getQueue()[26]).to.be.eq(3)
            expect(ballQueue.getQueue()[25]).to.be.eq(4)
            expect(ballQueue.getQueue()[24]).to.be.eq(5)
            expect(ballQueue.getQueue()[23]).to.be.eq(6)
            expect(ballQueue.getQueue()[22]).to.be.eq(7)
            expect(ballQueue.getQueue()[21]).to.be.eq(8)
            expect(ballQueue.getQueue()[20]).to.be.eq(9)
            expect(ballQueue.getQueue()[19]).to.be.eq(10)
            
            expect(ballQueue.getQueue().indexOf(12) >= 0).to.be.eq(true)
            expect(ballQueue.getQueue().indexOf(1) >= 0).to.be.eq(true)


            console.log('\nCleaning One hour Indicator, giving balls back to the queue in reverse order: ')         
            console.log(ballQueue.getQueue())            
        })
 
    })


})