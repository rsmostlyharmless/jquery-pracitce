$(`h1`).addClass(`another-day middle`); // 2 classes added
// $(`h1`).removeClass(`another-day`);
// $(`button`).text(`Why Me?`);
// $(`button`).html(`<em>Slanted</em>`);
console.log($(`img`).attr(`src`));
$(`a`).attr(`href`, `https://www.mozilla.org`); // second input set attribute
$(`h1`).click(function () {
    $(`h1`).css(`color`, `indigo`);
});

// $(`button`).click(function () {
//     $(`h1`).css(`color`, `green`);
// });

$(`input`).keydown(function (event) {
    console.log(event.key);
});

$(document).keydown(function (event) {
    $(`h1`).text(event.key);
});

$(`h1`).on(`mouseover`, function () {
    $(`h1`).css(`color`, `turquoise`);
});

$(`h1`).before(`<button>42</button>`);
$(`h1`).after(`<button>42</button>`);
$(`h1`).prepend(`<button>42</button>`);
$(`h1`).append(`<button>42</button>`);

// $(`button`).remove();

// $(`button`).on(`click`, function () {
//     // $(`h1`).toggle();
//     // $(`h1`).hide();
//     // $(`h1`).show();
//     // $(`h1`).fadeOut();
//     // $(`h1`).fadeIn();
//     // $(`h1`).fadeToggle();
//     // $(`h1`).slideUp();
//     // $(`h1`).slideDown();
//     // $(`h1`).slideToggle();
// });

// $(`button`).on(`click`, function () {
//     $(`h1`).animate({ opacity: 0.5 });
// });

$(`button`).on(`click`, function () {
    $(`h1`).slideUp().slideDown().animate({ opacity: 0.5 });
});
