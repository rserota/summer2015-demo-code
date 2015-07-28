$(document).ready(function(){

    $('.task-submit-form').on('submit', function(event){
        event.preventDefault()
        $.ajax({
            method : 'POST',
            url    : '/tasks',
            data   : $('.task-submit-form').serialize()
        })
    })

    var render = function(data){
        $('#tasks').empty()
        data.forEach(function(task){
            $('#tasks').append('<li data-name="' + task.title +'">'+task.title + ':' + task.description)
        })
    }

    var getTasks = function(){
        $.ajax({
            method  : 'GET',
            url     : '/tasks',
            // data    : null,
            success : render,
            fail    : function(err){console.log(err)}
        })
    }


    $('.get-tasks').on('click', getTasks)

    setInterval(getTasks, 2000) // polling

    $(document).on('click', 'li', function(){
        $.ajax({
            method  : 'DELETE',
            url     : '/tasks/'+$(this).attr('data-name'),
            data    : null,
            success : render,
            fail    : function(err){console.log(err)}

        })
    })
})