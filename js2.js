//1function letterfinder(word,match){
  ///  for(var i=0;i<word.length;i++){
     //   if(word[i]==match){
       //     console.log('Found the', match, 'at', i);
        //}
        //else{
         //   console.log('---No match found at', i);
       // }}}
//letterfinder("test","t");
//2var clothes=[];
//clothes.push('shirt');
//clothes.push('skirt');
//clothes.push('top');
//clothes.push('jeans');
//clothes.push('t-shirt');
//clothes.pop();
//clothes.push('leggings');
//console.log(clothes[3]);
//var favcar={};
//favcar.color='red';
//favcar.convertible='true';
//console.log(favcar);
function addTwoNums(a,b){
    try{
        if(typeof(a)!='number'){
            throw new ReferenceError('the first argument is not a number')
        }
        else if(typeof(b)!='number'){
            throw new ReferenceError('the second argument is not a number')
        }
        else{
    console.log(a+b);
        }
     } catch(err){
        console.log('ERROR!',err);
     }
}
addTwoNums(5,'5');
console.log("it still works!");