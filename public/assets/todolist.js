$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();// when we relad the page the todo.ejs template is rerendered with the new item added into it
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){ //li is pointing to each data on the list in the website
        var item = $(this).text().replace(/ /g, "-");// replace if any space present betweeen the item with '-' as urldoes not accept space
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload(); // when we relad the page the todo.ejs template is rerendered with the desired item is del from it
          }
        });
    });
  
  });