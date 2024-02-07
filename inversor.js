function inversorString(str) {
    let inversorString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        inversorString += str[i];
    }

    console.log(`String invertida: ${inversorString}`);
}

module.exports = inversorString;
