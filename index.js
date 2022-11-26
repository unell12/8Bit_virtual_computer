import Bit from "./bit.js";

class Root {
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
        let num = 0;
        for ( var e=0; e<8; e++ ){
            num = num + `${this.bits[e].state}`
        } 
        return parseInt(num, 2)
    }
    getBinary(){
        let num = 0;
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