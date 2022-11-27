/*import Bit from "./bit.ts";*/

/**
 * Bit Class
 */
 class Bit {
    state :number
    constructor(state :number){
        this.state = state
    }/*
    setState (state){
        if(state == 1 || state == 0){
            console.error('0 and 1 only!');
        }
        switch(state){
            case 0:
                this.state = 0
                break
            case 1:
                this.state = 1
                break
            default:
                console.error('0 and 1 only');
        }
    }*/
    off(){
        this.state = 0
    }
    on(){
        this.state = 1
    }
}

class Root {
    bits:Array<Bit>
    constructor(){
        this.bits = []
        for ( let i=0; i<8; i++ ){
            this.bits.push(new Bit(0))
        }
    }
    newState(bit_index, new_state){
        switch(new_state){
            case 0:
                this.bits[bit_index].off()
                break
            case 1:
                this.bits[bit_index].on()
                break
            default:
                console.error('0 and 1 only');
        }
    }
    toAnalog(){
        let num:string = "";
        for ( var e=0; e<8; e++ ){
            num = num + `${this.bits[e].state}`
        } 
        return parseInt(num, 2)
    }
    getBinary(){
        let num:string = "";
        for ( var e=0; e<8; e++ ){
            num = num + `${this.bits[e].state}`
        } 
        return num
    }
}

const root = new Root()

root.newState(7, 1)
console.log(root.getBinary())

// License on root