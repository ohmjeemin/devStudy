function _filter(list, predi) {
    let new_list = [];
    _each(list, function(val) {
        if(predi(val)) new_list.push(val);
    });
    return new_list;
}

function _map(list, mapper) {
    let new_list =[];
    _each(list, function(val) {
        new_list.push(mapper(val));
    });
    return new_list;
}

//filter와map의 중복 없애기
//1. loop와 2. i번째 요소 찾는거


function _each(list, iter) {
    for( let i=0; i<list.length; i++) {
        iter(list[i]);
    }
    return list;
}