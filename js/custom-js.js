'use strict';

// $(function() {
//     var panelList = $('#dragPanelList');

//     panelList.sortable({
//         // Only make the .panel-heading child elements support dragging.
//         // Omit this to make then entire <li>...</li> draggable.
//         handle: '.panel-heading', 
//         update: function() {
//             $('.panel', panelList).each(function(index, elem) {
//                  var $listItem = $(elem),
//                      newIndex = $listItem.index();

//                  // Persist the new indices.
//             });
//         }
//     });
//     panelList.disableSelection();
// });


// $( function() {
//     $( "#dragPanelList" ).sortable();
//     $( "#dragPanelList" ).disableSelection();
//   } );

 $( function() {
    $( ".panel-group" ).sortable({
      connectWith: ".panel-group",
      handle: ".panel-heading",
      cancel: ".btn",
      // update: function() {
      //       $('.panel', panelList).each(function(index, elem) {
      //            var $listItem = $(elem),
      //                newIndex = $listItem.index();

      //            // Persist the new indices.
      //       });
      //   }

    });
 
  } );




// var panelTemplate = $('#hidden-template').html();

// $("button.add").click(function(){
// 	$(".panel-group").append(template)
// })

var optionTemplate = $('#hidden-option').html();
$("button.addOption").click(function(){
	$(".confirmation").before(optionTemplate)
})


var questionTemplate = $('#hidden-question').html();
$("button.addQuestion").click(function(){
	$(".panel-group").append(questionTemplate)
})

$("button.question-delete").click(function(){
	$(this).closest(".question").remove();
})

$("button.option-delete").click(function(){
	$(this).closest(".option").remove();
})
