const fs = require('fs');
const file = fs.createWriteStream("./big.file");

for (let i=0; i<= 1e6;i++) {
    file.write('Ray Douglas Bradbury, American novelist, short story writer, essayist, playwright, screenwriter and poet, was born August 22, 1920 in Waukegan, Illinois. He graduated from a Los Angeles high school in 1938. Although his formal education ended there.\n');
}

file.end();