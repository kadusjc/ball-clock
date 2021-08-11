const { expect } = require('chai')
const BallQueue = require('../src/models/BallQueue')
const MinuteTrack = require('../src/models/MinuteTrack')

describe.only('MunutesTrack class test', () => {
    describe('.addOneBallToIndicator', () => {
        it('should increment indicator counter and reduce the balls of main queue after 1 minute', () => {
            let ballQueue = new BallQueue(30)            
            let minuteTrack = new MinuteTrack(ballQueue)
            console.log('\nOriginal queue: ')
            console.log(ballQueue.getQueue())         
            expect(ballQueue.getQueue().length).to.be.eq(30)

            minuteTrack.addOneBallToIndicator()
            expect(minuteTrack.indicatorCount).to.be.eq(1)
            expect(minuteTrack.indicatorQueue).to.be.deep.eq([1])            
            expect(ballQueue.getQueue().length).to.be.eq(29)
            
            console.log('\nTaking one ball ')
            console.log(ballQueue.getQueue())         

            console.log('\nMinutes Indicator: ')         
            console.log(minuteTrack.indicatorQueue)

            console.log('\nBalls queue ')
            console.log(ballQueue.getQueue())
        })
        
        it.only('should give balls back to the queue ( in reverse order ) after five minutes indicator be full', () => {
            let ballQueue = new BallQueue(30)            
            let minuteTrack = new MinuteTrack(ballQueue)

            console.log('Original queue: ')         
            console.log(ballQueue.getQueue())         

            for (let i=0; i<=3; i++) {
                minuteTrack.addOneBallToIndicator()    
            }
            console.log('\nTaking 4 balls from Queue (fulling minutes Indicator): ')

            console.log('\nMinutes Indicator: ')         
            console.log(minuteTrack.indicatorQueue)

            console.log('\nBalls queue ')
            console.log(ballQueue.getQueue())


            expect(minuteTrack.indicatorCount).to.be.eq(4)
            expect(minuteTrack.indicatorQueue).to.be.deep.eq([1, 2, 3, 4])
            expect(ballQueue.getQueue().length).to.be.eq(26)         

            expect(ballQueue.getQueue()[0]).to.be.eq(5)
            expect(ballQueue.getQueue()[25]).to.be.eq(30)
            
            console.log('Taking one more ball to run Minute track....')
            minuteTrack.addOneBallToIndicator()    
            console.log(ballQueue.getQueue())
            
            console.log('\nCleaning Minutes Indicator, giving balls back to the queue in reverse order: ')         
            expect(minuteTrack.indicatorCount).to.be.eq(0)
            expect(minuteTrack.indicatorQueue).to.be.deep.eq([])

            expect(ballQueue.getQueue().length).to.be.eq(28)
            expect(ballQueue.getQueue()[0]).to.be.eq(7)
            expect(ballQueue.getQueue()[27]).to.be.eq(1)

            /*expect(ballQueue.getQueue()[27]).to.be.eq(2)
            expect(ballQueue.getQueue()[26]).to.be.eq(3)
            expect(ballQueue.getQueue()[25]).to.be.eq(4)
            expect(ballQueue.getQueue()[24]).to.be.eq()*/
            
            console.log('\nCleaning Minutes Indicator, giving balls back to the queue in reverse order: ')         
            console.log(ballQueue.getQueue())           
        })
 
    })


})