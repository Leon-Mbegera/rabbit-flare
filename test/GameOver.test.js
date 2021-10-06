import { fetchScore, endpoint } from '../src/Scenes/GameOver'
import * as axios from 'axios';


describe('Fetching players and their score onto leaderboard', () => {

    describe('successful get request made to endpoint', () => {
      const result = fetchScore();
      
      it('should return each player name and score', async () => {
        

       expect(Array.isArray(result)).toBeTruthy
      }); 

      it('asdf', () => {
        if(result.length){
          for(let player of result){
            expect(typeof player).toEqual("object")
            expect(typeof player.user).toEqual("string")
            expect(typeof player.score).toEqual("number")
            expect(player.user).toBeTruthy
            expect(player.score).toBeTruthy
          }
        }
        
      })

      


    })




});


