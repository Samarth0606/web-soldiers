// console.log("hello")

function refresh(){

    $.get('/todos' , function(data){
        // console.log(data);
        for(let item of data){
            $('#list').append(`<li>${item}</li>`)
        }
    })
}

$('#btn').on('click' , function(){
    $('#list').empty();
    let inpp = $('#inp').val();
    $.post('/todos' , {inpp} , function(res){
        // console.log(res);
        $('#inp').val('');
        refresh();
    } )
})

refresh()