 const paret=document.querySelector(".parent");
 console.log(paret);
 console.log(paret.children);
 const chi=paret.children[1].innerHTML;
console.log(chi);
for(let i=0;i<paret.children.length;i++){
    console.log(paret.children[i].innerHTML);
}