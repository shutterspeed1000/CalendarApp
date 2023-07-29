// install Day.js to page
dayjs().format();

//Set hour for color changes
var currenthr = dayjs().format(`H`);

//display current day on site
$(`#currentDay`).text(dayjs().format(`dddd, MMMM D`));

// run color and data settings after main page loads

$(document).ready(function () {
  setColor();
});

// select all IDs with hour, compare data hour with current hour.  Set class based on comp.  Make loop

function setColor() {
  $(document).ready(function () {
    $('[id="hour"]').each(function () {
      var slotTime = $(this).data();

      // Get day info from localstorage

      $('div[data-hour="' + slotTime.hour + '"]')
        .find("textarea")
        .text(localStorage.getItem(slotTime.hour));

      console.log(slotTime.hour);

      if (currenthr == slotTime.hour) {
        $('div[data-hour="' + slotTime.hour + '"]').addClass(
          "row time-block present"
        );
      }
      if (currenthr < slotTime.hour) {
        $('div[data-hour="' + slotTime.hour + '"]').addClass(
          "row time-block future"
        );
      }

      if (currenthr > slotTime.hour) {
        $('div[data-hour="' + slotTime.hour + '"]').addClass(
          "row time-block past"
        );
      }
    });
  });
}

//Save data when button pushed
$("button").click(function () {
  // Get the content of the textarea
  var dataSlot = $(this).closest("div").attr(`data-hour`);
  var dataEntry = $(this).closest("div").children("textarea").val();
  localStorage.setItem(dataSlot, dataEntry);
});
