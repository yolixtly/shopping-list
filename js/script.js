  $(document).ready(function() {

  /*-----Global Variables -----*/

  var checkMark = "<span class= 'itemNotChecked'></span>"; 
  var crossMark = "<span class= 'deleteButton'></span>";


  /*-----Function to submit the items of input with Add Me button -----*/

  function addProduct() {
    var itemInput = $(".productInput").val();   //items logged inside the text box "input"
    var itemOnList =  "<li class ='newItem'>" + crossMark + itemInput + checkMark + "</li>";
    $(".added-items").prepend(itemOnList);  
    $(".productInput").val("");         //clean input box after clicking to add the last product

  };

  /*Calling the addProduct function with Click event*/

    $(".add-button").click(addProduct);


  /*---Function to check completed items---*/

  $(".added-items").on('click', '.itemNotChecked, .itemChecked', 
    function() {
      $(this).closest('li').toggleClass('newItem');
      $(this).closest('li').toggleClass("itemComplete");
      $(this).toggleClass("itemNotChecked");
      $(this).toggleClass("itemChecked");
    });


  /*---function to delete items---*/

  $(document).on("click", '.deleteButton', 
    function() {
      $(this).closest('li').fadeOut(300);

  });
});

  




  


