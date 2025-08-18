import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsciiService {
  showAscii() {
      console.log(`                 
              A           
             AAA          
            AAAAA         
           AAA AAA        
          AAA   AAA       
         AAA     AAA
        /---HELLO---\\
       AAA         AAA    
      AAA           AAA   
     AAA             AAA
     
    “The journey is the reward.” – Confucius                      
      `);
  }
}