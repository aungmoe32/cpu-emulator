class Memory{
    memory = []
    addressCount = 256 // decimal
    // cellSize = 1 // byte

    constructor(){
        this.fillMem()
    }

    fillMem(){
        for(let i = 0; i< this.addressCount; i++){
            this.memory.push('00')
            
        }
        // console.log(this.memory)

    }

    fillMemFromAST(AST){
        let start = 0
        AST.forEach(instruction => {
            this.set( start.toString(16) , instruction.firstByte)
            start++
            this.set( start.toString(16) , instruction.secByte)
            start++
        });
        // console.log(this.memory)

    }

    toMemHex(hex){
        return hex.toUpperCase().padStart(2, '0');
    }

    isHexSame(hex1, hex2){
        return parseInt(hex1, 16) ===  parseInt(hex2, 16);
    }

    isOneByte(hex){
        return parseInt(hex, 16) <= 255;
    }

    // need to add valid hex 
    get(start, end = null){

        // if(!this.isOneByte(start)){
        //     throw 'address must be one byte'
        // }


        if(end == null){
            // console.log(start)
            return this.memory[parseInt(start, 16)]
        }

        // if(!this.isOneByte(end)){
        //     throw 'address must be one byte'
        // }

        // if(parseInt(end, 16) < parseInt(start, 16)){
        //     throw 'end address must be same or larger than start address'
        // }

        
        return this.memory.slice(parseInt(start, 16), parseInt(end, 16) + 1)

        
        
    }
    
    // address must be valid hex
    set(address, value){
        // if(!this.isOneByte(address)){
        //     throw 'address must be one byte'
        // }
        this.memory[parseInt(address, 16)] = this.toMemHex(value)
    }

}


export default Memory

