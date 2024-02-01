class RegisterUnit{
    registers = []
    count = 16
    register_capactiy = 255 // decimal FF

    constructor() {
        this.fillRegisters()
    }

    fillRegisters(){
        for(let i = 0; i< this.count; i++){
            this.registers.push('00')
            
        }
    }

    isRegisterNumValid(hex){
        return parseInt(hex, 16) <= 15;
    }

    canStoreOnRegister(value){
        return parseInt(value, 16) <= this.register_capactiy;
    }


    get(num){
        return this.registers[parseInt(num, 16)]
    }


    set(num, value){
        // if(!this.isRegisterNumValid(num)){
        //     throw 'invalid register number (0-F)'
        // }
        // if(!this.canStoreOnRegister(value)){
        //     throw 'value must be 0-FF'
        // }
        this.registers[parseInt(num, 16)] = this.toMemHex(value)
    }

    toMemHex(hex){
        return hex.toUpperCase().padStart(2, '0');
    }

}

// let ru = new RegisterUnit()
// ru.set('a', 'fff')
// console.log(ru.registers)



export default RegisterUnit