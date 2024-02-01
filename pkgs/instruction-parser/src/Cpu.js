import Operation from "./Operation.js"
import RegisterUnit from "./RegisterUnit.js"

class Cpu{
    program_counter = '00'
    curr_instruction = {full: '0000'}
    memory = null
    operation = null
    register_unit = new RegisterUnit()
    maxAddress = 'FF'

    constructor(memory) {  
        
        this.memory = memory;
        // console.log(this.memory)
        this.operation = new Operation(this.memory, this, this.register_unit)
    }

    isProgramCounterValid(){
        return parseInt(this.program_counter, 16) <= parseInt(this.maxAddress, 16)
    }

    resetPC(){
        this.program_counter = '00'
    }


    fetch() {
        if(!this.isProgramCounterValid()){
            throw new Error('pc_end')
        }

        let start = this.program_counter
        let end = this.increaseHex(this.program_counter, 1)
        let ins_arr = this.memory.get(start, end)
        if(ins_arr.length == 0){
            // console.log(typeof start)
            // console.log(this.program_counter)
            // console.log(ins_arr)
        }
        this.curr_instruction = this.getInstruction(ins_arr)

        this.increasePC()

        // console.log(this.curr_instruction)
        
    }

    execute(printEvent) {
        this.operation.execute(this.curr_instruction, printEvent)
    }

    process(printEvent){
        for(let i = 0; i < 128; i++){
            this.fetch()
            this.execute(printEvent)
        }
    }


    getInstruction(arr){
        // if(arr.length < 2){
        //     throw 'input array must be length two'
        // }

        return {
            opcode : arr[0][0],
            operand : arr[0][1] + arr[1],
            firstByte: arr[0],
            secondByte: arr[1],
            full: arr.join('')
        }
    }

    increaseHex(hex, num){
        let temp = parseInt(hex, 16) + num
        return this.toMemHex(temp.toString(16))
    }

    increasePC(){
        this.program_counter = this.increaseHex(this.program_counter, 2)
    }

    toMemHex(hex){
        return hex.toUpperCase().padStart(2, '0');
    }
}

export default Cpu