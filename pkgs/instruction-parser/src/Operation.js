import {default as bitwiseRotation} from 'bitwise-rotation'

// const rotationObject = bitwiseRotation(8);


class Operation {
    memory = null
    cpu = null
    register_unit = null
    rotationObject = bitwiseRotation(8);

    opcodes = {
        '0': this.doNothing,
        '1': this.LOAD,
        '2': this.LOAD2,
        '3': this.STORE,
        '4': this.MOVE,
        '5': this.ADD,
        '6': this.doNothing,
        '7': this.OR,
        '8': this.AND,
        '9': this.XOR,
        'A': this.ROTATE,
        'B': this.JUMP,
        'C': this.HALT,
        'D': this.PRINT,

    }


    constructor(memory, cpu, register_unit) {
        this.memory = memory;
        this.cpu = cpu;
        this.register_unit = register_unit;
    }

    execute(instruction, printEvent) {
        // console.log(instruction.opcode)
        this.opcodes[instruction.opcode].bind(this)(instruction, printEvent)
    }

    doNothing(instruction) {

    }

    LOAD(instruction) {
        let address = instruction.secondByte
        let value = this.memory.get(address)
        this.register_unit.set(instruction.operand[0], value)

        // console.log(this.register_unit)


    }
    LOAD2(instruction) {
        let value = instruction.secondByte
        this.register_unit.set(instruction.operand[0], value)
    }

    STORE(instruction) {
        let address = instruction.secondByte
        let value = this.register_unit.get(instruction.operand[0])
        this.memory.set(address, value)

    }
    MOVE(instruction) {
        let reg1 = this.register_unit.get(instruction.secondByte[0])
        this.register_unit.set(instruction.secondByte[1], reg1)

    }
    ADD(instruction) {
        let reg1 = this.register_unit.get(instruction.secondByte[0])
        let reg2 = this.register_unit.get(instruction.secondByte[1])
        let total = this.addHex(reg1, reg2).slice(-2) // slice only one byte

        this.register_unit.set(instruction.operand[0], total)

    }
    OR(instruction) {
        let reg1 = this.register_unit.get(instruction.secondByte[0])
        let reg2 = this.register_unit.get(instruction.secondByte[1])
        let result = this.orHex(reg1, reg2)

        this.register_unit.set(instruction.operand[0], result)

    }

    AND(instruction) {
        let reg1 = this.register_unit.get(instruction.secondByte[0])
        let reg2 = this.register_unit.get(instruction.secondByte[1])
        let result = this.andHex(reg1, reg2)

        this.register_unit.set(instruction.operand[0], result)

    }


    XOR(instruction) {
        let reg1 = this.register_unit.get(instruction.secondByte[0])
        let reg2 = this.register_unit.get(instruction.secondByte[1])
        let result = this.xorHex(reg1, reg2)

        this.register_unit.set(instruction.operand[0], result)

    }

    ROTATE(instruction) {
        let rnum = instruction.operand[0]
        let rvalue = parseInt(this.register_unit.get(rnum), 16)
        let roTime = parseInt(instruction.secondByte, 16)

        let result = this.rotationObject.ror(rvalue, roTime).toString(16)

        this.register_unit.set(rnum, this.toMemHex(result))
        // console.log(this.rotationObject.ror(16, 257))

    }

    JUMP(instruction) {
        let rnum = instruction.operand[0]
        
        let reg0 = this.register_unit.get('0')
        let reg1 = this.register_unit.get(rnum)

        if(reg0 === reg1){
            let address = instruction.secondByte
            this.cpu.program_counter = address
            // console.log(this.cpu.program_counter)
        }
    }

    HALT(instruction) {
        throw new Error('halt')
    }


    PRINT(instruction, printEvent) {
        let rnum = instruction.operand[0]
        let value = this.register_unit.get(rnum)
        printEvent(rnum, value)
        // console.log(value)
    }

    orHex(hex1, hex2){
        let temp = parseInt(hex1, 16) | parseInt(hex2, 16)
        return this.toMemHex(temp.toString(16))
    }

    andHex(hex1, hex2){
        let temp = parseInt(hex1, 16) & parseInt(hex2, 16)
        return this.toMemHex(temp.toString(16))
    }
    xorHex(hex1, hex2){
        let temp = parseInt(hex1, 16) ^ parseInt(hex2, 16)
        return this.toMemHex(temp.toString(16))
    }

    addHex(hex1, hex2){
        let temp = parseInt(hex1, 16) + parseInt(hex2, 16)
        return this.toMemHex(temp.toString(16))
    }

    toMemHex(hex){
        return hex.toUpperCase().padStart(2, '0');
    }

}


export default Operation