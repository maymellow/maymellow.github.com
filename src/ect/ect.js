
ajax ('/data.json',function(data){
    return data+1;
});
ajax('/data.json', data => data+1 );

[].map(v=> v+1);
[{price:300}].filter(v => v.price > 200);
[{price:300}].filter((v,i) => {
    console.log(i);
    return v.price > 200
});

const $ = require('jquery');

$('#root').html(tplMain());


$('[data-view="list"]').html(tplList({
    list: list
}));
