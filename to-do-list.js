$(document).ready(function () {

    $(".add-item-btn").click(function () {

        $(".addItem-settings,.todo-doing-done").hide();
        $(".new-item").show();
    });

    $(".want-to-do").click(function () {

        var item = $('.item-input').val()

        if (item !== "") {
            $(".coloumn-1 ul").append(`<div draggable='true' class='added-item'>
                                        <li>${item}</li>
                                        <span class='edit'>&#9998</span>
                                        <span class='delete'>&#128465</span>
                                        </div>`)
            $(".addItem-settings,.todo-doing-done").show();
            $(".new-item").hide();
            $('.column-ul').sortable({
                connectWith: ".column-ul"
            });
        }
    });
    $(".on-the-way").click(function () {

        var item = $('.item-input').val()

        if (item !== "") {
            $(".coloumn-2 ul").append(`<div draggable='true' class='added-item'>
                                        <li>${item}</li>
                                        <span class='edit'>&#9998</span>
                                        <span class='delete'>&#128465</span>
                                        </div>`)
            $(".addItem-settings,.todo-doing-done").show();
            $(".new-item").hide();
            
        }
    });
    $(".did").click(function () {

        var item = $('.item-input').val()

        if (item !== "") {
            $(".coloumn-3 ul").append(`<div draggable='true' class='added-item'>
                                        <li>${item}</li>
                                        <span class='edit'>&#9998</span>
                                        <span class='delete'>&#128465</span>
                                        </div>`)
            $(".addItem-settings,.todo-doing-done").show();
            $(".new-item").hide();
        }
    });
    $(document).on("click", ".edit", function () {
        // alert("Clicked on edit button");
        var edit_data = $(this).closest('li').text();
        // alert("Edit data: " + edit_data);
        var new_data = prompt("Edit item:", edit_data);
        // alert("New data: " + new_data);
        if (new_data !== "") {
            // alert("Updating item");
            $(this).parent().find('li').text(new_data);
        }
    });

    $(".back-button").click(function () {

        $(".addItem-settings,.todo-doing-done").show();
        $(".new-item").hide();
    });
    $(document).on("click", ".delete", function (){
        $(this).parent().remove()
    });
    
});