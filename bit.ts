/**
 * Bit Class
 */
 class Bit_beta {
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
