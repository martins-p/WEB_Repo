$("#firewood-wrapper img").draggable();
$("#bonfire-wrapper img").droppable({
    drop: function(event, ui){
        var width = $(this).width();
        var newWidth = width * 1.1;
        $(this).width(newWidth);

        ui.draggable.remove();

        var newFirewood = $('<img src="img/Firewood.png">');
        newFirewood.appendTo("#firewood-wrapper");
        newFirewood.draggable();
    }
});