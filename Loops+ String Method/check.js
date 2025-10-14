let name = 'madamd'

let reversed = ''

for (let i = name.length -1 ; i >= 0 ; i--){
    reversed += name[i]
}


if(name === reversed){
    console.log('Plaindrom');
}
else{
    console.log('not a plaindrom');
}