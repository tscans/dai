//node ./node_modules/intermock/build/src/cli/index.js --files ./example-file.ts --interfaces "Admin"

const fs = require('fs');
const faker = require("faker");
const { Generator, Configuration } = require("@mangm/ts-mock-generator");
const generator = new Generator("./tsconfig.json");

const mocker = async () =>{
    console.log("Mocking...")
    let data = null;
    try {  
        data = fs.readFileSync('./src/index.ts', 'utf8').toString();
    } catch(e) {
        console.log('Error:', e.stack);
    }
    const interfaceNames = data.replace(/["\n"]/g, "").split("export interface ").
    filter(u=>u !== "").map(u=>{
        const brace1 = u.indexOf("{");
        return u.substring(0,brace1).replace(/[" "]/g, "");
    });
    const generations = interfaceNames.map(interf=>
        `export const Mock${interf} = ${JSON.stringify(
            generator.generate(interf,{
                includeAllProps:true,
                primitiveValues:{
                    string:"string",
                    number:987654
                },
                maxRecursiveLoop:3
            })
        )}`
    ).join("\n");
    
    fs.writeFileSync("./src/mocks/index.ts",generations);
    console.log("Done Mocking.")
}

mocker();

// string[]	["MOCK"]
// string	"MOCK"
// number[]	[-1]
// number	-1
// boolean[]	[true]
// boolean	true