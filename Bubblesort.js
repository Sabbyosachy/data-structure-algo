const num=[10,15,17,8,3,23];

function Bubblesort(a){
    for(let i=0 ; i<a.length ; i++){
        for (let j = 0; j < a.length-1; j++) {
            
            if(a[j]>a[j+1]){
                [a[j],a[j+1]]=[a[j+1],a[j]];
            }
        }

    }
    return a;
}
const sorted=Bubblesort(num);
console.log(sorted);