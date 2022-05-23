function sumOfElements(arr) {
    let bucket = 0;
    arr.forEach(function(num) {
        bucket+=num
    })

    return bucket
}

function totalPrice(arr) {
    let total = 0
    for (let i = 0; i < arr.length;i++) {
        total += arr[i].price;
    }
    return total
}

function findHighestPrice(arr) {
    if (product.price > bucket) {
        bucket = product.price;
    }
    return bucket;
}

function discountCheck(){
    if (input.clubMember === true || totalPrice(input.items) > 150) {
        return true;
    }else
        return true
}

function newProduct(name,price) {
    return {
        name: name,
        price: price
    }
}

function describeNumber(number) {
    if (!isNaN(parseFloat(number))) {
         {let obj= {}
            obj.value = parseFloat(number);
            obj.evenOrOdd = evenOrOdd();
            obj.numberOfDigits = number.toString().length;
            console.log(obj)
            return obj;
        }
    }
}

function screamingSnakeCawse(str) {
    let supperCaseStr = str.toUpperCase();
    let array = upperCaseStr.split('');
    let finalStr = array.join('_')

    return finalStr

    return str.toUpperCase().split(' ').join('_')
}