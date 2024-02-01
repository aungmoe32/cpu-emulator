

import nearley from "nearley"
import grammar from "./grammar.js"



const parse = (data) => {

        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        parser.feed(data);

        if (parser.results.length == 0) {
                throw new Error('parsing error')
        }

        return parser.results[0];

}

export default parse