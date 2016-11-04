'use strict';

var countQuestion = 1;


 $( function() {
    $( '.panel-group' ).sortable({
      connectWith: '.panel-group',
      handle: '.panel-heading',
      cancel: '.btn',
      // update: function() {
      //       $('.panel', panelList).each(function(index, elem) {
      //            var $listItem = $(elem),
      //                newIndex = $listItem.index();

      //            // Persist the new indices.
      //       });
      //   }

    });
 
  } );


//add question
var questionTemplate = $('#hidden-question').html();
$('button.add-question').click(function(){
	$('.panel-group').append(questionTemplate);
  countQuestion = countQuestion + 1;
  $('#new-panel').attr('id','qustion'+countQuestion);
  var newPanel = $('#qustion'+countQuestion)
  newPanel.find('.panel-heading').attr('id','heading'+countQuestion);

  newPanel.find('h4 a').text('Question #' + countQuestion);
  newPanel.find('h4 a').attr('href', '#collapse' + countQuestion);
  newPanel.find('.panel-collapse').attr('id','collapse'+countQuestion);
})

var optionTemplate = $('#hidden-option').html();

//add option
$('.container').on('click' ,'button.add-option',function(){
  $(this).closest('.add-button').before(optionTemplate);
});

//remove question
$('.container').on('click' ,'button.question-delete',function(){
  $(this).closest('.question').remove();
  countQuestion = countQuestion - 1;
});

//remove option
$('.container').on('click' ,'button.option-delete',function(){
  $(this).closest('.option').remove();
});


//selected from dropdown
// $('container').on('click', 'ul.dropdown-menu li a', function(){ 
//   var selText = $(this).text();
//   $(this).closest('.dropdown-toggle').text(selText+'<span class="caret"></span>');
//   // $(this).closest('.dropdown-toggle').html(selText+'<span class="caret"></span>');
//   //$('#selected').text($(this).text());
//   // $('#selected').value($(this).value());
// });

// $('.dropdown-menu li a').click(function(){
//   var selText = $(this).text();
//   $(this).closest('button.dropdown-toggle').text(selText+'<span class="caret"></span>');
// })

