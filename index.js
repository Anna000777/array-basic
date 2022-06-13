let arr = [];

function createArray() {
    while (true) {
        const userWord = prompt('Enter your word', '');
        if (userWord === null || userWord === '') {
            console.log(arr);
            const newArr = arr.map((item) => {
                const firstLettter = item[0].toUpperCase();
                const restLetters = item.slice(1).toLowerCase();
                return `${firstLettter}${restLetters}`;
            });
            newArr.sort((first, second) => {
                return first.length - second.length;
            })
            return console.log(newArr);
        } else {
            arr.push(userWord);
            console.log(userWord);
        };
    }
}


createArray();