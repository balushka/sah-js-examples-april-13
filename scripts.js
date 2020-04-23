let name = "Balazs";

console.log("Name is " + name);

//$('selector').action();

$('h1').text('Kabbe!');
$('p').html('kaki pisi: <strong>13</strong>');

$('strong').css('background', 'red');
$('strong').css('padding', '20px');

let color='blue';

$('h2').toggleClass('color');
$('h2').toggleClass('color');

$('ul').append('<li>pisi ' + name + '</li>');
$('#special-list-item').remove();

// let addButtonHandler = () => {
//     if ($('li').length < 5) {
//         $('ul').append('<li>pisi ' + name + '</li>');
//     }
    
// };

//@Simon Balázs the arrow syntax is the modern version 
//+ it solves problems related to js scopes - but that's a little more advanced topic

function addButtonHandler() {
    if ($('li').length < 5) {
        $('ul').append('<li>pisi ' + name + '</li>');
    }
};

$('#add-button').click(addButtonHandler);

// this is euivalent:
// $('#add-button').click(() => {
//     $('ul').append('<li>pisi ' + name + '</li>');
// });

$('#remove-button').click(() => {
    $('li:last-child').remove();

});


let age = 13;

console.log('before if');

if (age < 18) {
    console.log("Not old enough to drive".toLowerCase());
} else {
    console.log("Old enough to drink");
};

console.log('after if');

let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

// $('#box-container').append('<div class="box"></div>');
// $('.box:last-child').css('background', colors[0]);

colors.push('purple');
colors.forEach((color) => {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

for (let i = 0; i < colors.length; i++) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', colors[i]);
    
}


