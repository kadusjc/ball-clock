const BallClock = require('../src/BallClock')

describe('BallClock class test', () => {
    describe('.turnOnClock', () => {
        it('should NOT turn the clock on if queue size is not valid', () => {
            let ballClock = new BallClock(2)
            expect(ballClock.turnOnClock()).toThrow("UNKNOWN ERROR")            
        })

    })
})