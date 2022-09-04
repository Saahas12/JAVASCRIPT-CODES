// function* range(_start_, _end_) {
//         for (let h = _start_; h <= _end_; h++) {
//         yield h;
//         }
//         }
//         for (h of range(2, 6)) {
//         console.log(h);
//         }

function arr(a)
{
for (let i = 0; i < a.length; i++) {
    for (let k = i + 1; k < a.length; k++) {
        if (a[i] != a[k]) {
            //do stuff
        }
    }
}
}