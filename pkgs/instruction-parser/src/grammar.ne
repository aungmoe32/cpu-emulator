program -> instructions {% id %}

instructions -> _ instruction _ {% 
                data => [data[1]]
              %}
			  
			  |  _ instruction _ "\n" instructions {%
                data => [data[1],...data[4]]
              %}
instruction ->  opcode operand  {%

data => {
	return { 
	opcode : data[0],
	operand : data[1],
	firstByte: data[0] + data[1][0],
		secByte: data[1][1] + data[1][2]
	}
}

%}

opcode -> [0-9a-dA-D] {%

id

%}

operand -> hex hex hex {%

data => {
	return data.map(function(x){ return x.toUpperCase(); })
}

%}

hex -> [0-9a-fA-F] {% id %}

_ -> [\s\t]:*