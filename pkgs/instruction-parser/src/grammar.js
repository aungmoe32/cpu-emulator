// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
export default (function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["instructions"], "postprocess": id},
    {"name": "instructions", "symbols": ["_", "instruction", "_"], "postprocess":  
        data => [data[1]]
                      },
    {"name": "instructions", "symbols": ["_", "instruction", "_", {"literal":"\n"}, "instructions"], "postprocess": 
        data => [data[1],...data[4]]
                      },
    {"name": "instruction", "symbols": ["opcode", "operand"], "postprocess": 
        
        data => {
        	return { 
        	opcode : data[0],
        	operand : data[1],
        	firstByte: data[0] + data[1][0],
        		secByte: data[1][1] + data[1][2]
        	}
        }
        
        },
    {"name": "opcode", "symbols": [/[0-9a-dA-D]/], "postprocess": 
        
        id
        
        },
    {"name": "operand", "symbols": ["hex", "hex", "hex"], "postprocess": 
        
        data => {
        	return data.map(function(x){ return x.toUpperCase(); })
        }
        
        },
    {"name": "hex", "symbols": [/[0-9a-fA-F]/], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s\t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]}
]
  , ParserStart: "program"
}

return grammar;
})();

