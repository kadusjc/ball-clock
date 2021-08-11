const BallClock = require('../src/BallClock')
const validationErrorMessage = 'Queue input invalid. Use values from 27 until 127'

describe('BallClock class test', () => {
    describe('.turnOnClock', () => {
        it('should NOT turn the clock on if queue size is not valid', () => {
            try { 
                new BallClock()
            } catch(error) {
                expect(error.message).to.be.eq(validationErrorMessage)
            }
            
            try { 
                let ballClock = new BallClock(128)
                ballClock.turnOnClock() 
            } catch(error) {
                expect(error.message).to.be.eq(validationErrorMessage)
            }
        })

        it('should turn the clock on if queue size is valid', () => {
            let ballClock = new BallClock(27)            
            ballClock = new BallClock(28)            
            ballClock = new BallClock(102)            
        })

        it('should return 15 days when the queue has size like 30', () => {
            let ballClock = new BallClock(30)
            let days = ballClock.turnOnClock()
            expect(days).to.be.eq(15)
        })

        it('should return 378 days when the queue has size like 45', () => {
            let ballClock = new BallClock(45)
            let days = ballClock.turnOnClock()
            expect(days).to.be.eq(378)
        })

    })


})