function quickSort(arr, l, r) {
    if (l < r) {
        let q = partition(arr, l, r);
        quickSort(arr, l, q - 1);
        quickSort(arr, q + 1, r);
    }
    return arr;
}

function partition(arr, l, r) {
    let pivot = arr[r];
    let i = l - 1;

    for (let j = l; j <= r - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
    return i + 1;
}   

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    console.log(quickSort(arr, 0, n-1).join(" "));
}


if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`5
3 5 0 9 8`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}