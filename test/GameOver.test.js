import { fetchScore } from '../src/Scenes/GameOver'

const result = fetchScore();

    describe('successful get request made to endpoint', () => {      
      it('should return each player name and score', async () => {
      expect(Array.isArray(result)).toBeTruthy
      }); 
    })

    describe('Tests the object response', () => {

      it('returns an object with string and number properties', () => {
        if(result.length){
          for(let player of result){
            expect(typeof player).toEqual("object")
            expect(typeof player.user).toEqual("string")
            expect(typeof player.score).toEqual("number")
          }
        }
        
      })
    })

    describe('Tests for truthiness', () => {

      it('returns a players properties as truthy', () => {
        if(result.length){
          for(let player of result){
            expect(player.user).toBeTruthy
            expect(player.score).toBeTruthy
          }
        }
        
      })
    })







