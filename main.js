'use script'

//masala 9
//   let n = [8,2,3,4,5,6]
//   let a = []

//   for (let i = 0; i < n.length; i++) {
//     let item = n[i];
//     if(item % 2 == 0 ){ 

//     a.push(item)
//     }
//   }
//   console.log( 'orasida eng kattasi =  ' +Math.max.apply(null, a));





// //masala 10
// let n = [8,2,3,4,5,6]
// let a = []

// for (let i = 0; i < n.length; i++) {
//   let item = n[i];
//   if(item % 2 == 0 ){ 

//   a.push(item)
//   }
// }
// console.log( 'orasida eng kattasi =  ' +Math.min.apply(null, a));






// //masala 11
// let n = [8,2,3,4,5,6]
// let a = []

// for (let i = 0; i < n.length; i++) {
//   let item = n[i];
//   if(item % 2 == 1 ){ 

//   a.push(item)
//   }
// }
// console.log( 'orasida eng kattasi' +Math.max.apply(null, a));














//masala 12
// let n = [8,2,3,4,5,6]
// let sum =  0
// let a = 0

// for (let i = 0; i < n.length; i++) {
//   let item = n[i];
//     sum = sum + item 
//     a++
// }

//     console.log(Math.floor(sum/a));









//masala 13
// let n = [8,2,3,4,5,6]
// let a = []

// for (let i = 0; i < n.length; i++) {
//     let item = n[i];
//     if(item % 2 == 1 ){ 
//         a.push(item)
//     }
// }

//     console.log(a);










//masala 14
// let n = [8, 2, 3, 4, 5, 6]
// let x = []

// for (let i = 0; i < n.length; i++) {
//     let item = n[i];
//     a = true
//     for (b = 2; b < i; b++) {
//         if (i % b == 0) {
//             a = false
//             break;
//         }
//     }
//     if (a == false) {
//         x.push(item)
//         console.log(x);
//     }
// }






//masala 15
// 13 bilan bir-xil


// //masala 16
// let n = [8,2,3,4,5,6 ,'546']
// let a = []



// const result = n.filter(String);
// console.log(result);


// masala 17

// let a = [12, 5, 1, 2, 3, 6];
// let b = [15, 51, 1, 2,];
// let c = a.concat(b);



// let d = [];

// for (let i = 0; i < c.length; i++) {
//     if (!d.includes(c[i])) {
//         d.push(c[i])
//     }
// }

// console.log(d);






// masala 18

// let n = +prompt( ' N soni kiritig: ' ) ;
// let b = [];

// for ( i= 1 ; i-1 < n ; i++ ) {
//     a = +prompt( i + 'chi son kiritig ' ) ;
//     b.push(a)
// }
//     console.log(b);










// masala 19

// let n = +prompt( ' N soni kiritig: ' ) ;
// let b = [];
// let sum = 0 ;

// for ( i= 1 ; i-1 < n ; i++ ) {
//     a = +prompt( i + 'chi son kiritig ' ) ;
//     b.push(a)
//     sum = sum + a
// }
//     console.log(sum);




// masala 20

let n = +prompt( ' N soni kiritig: ' ) ;
let b = [];

for ( i= 1 ; i-1 < n ; i++ ) {
    a = +prompt( i + 'chi son kiritig ' ) ;
    b.push(a)
}


console.log(b);

// let juft = prompt( ' juft yokiy toq ? ' )

let q = [] ;

for (let i = 0; i < n.length; i++) {
    let item = b[i];
    if(item % 2 == 0){ 
    
        q.push(item)

    }
}

console.log(q);


//   if(item % 2 == 0 ){ 
//     console.log(q.push(item));
//   } else if (item % 2 == 1 ){
//     console.log(p.push(item));
//   }