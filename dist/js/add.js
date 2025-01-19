// Script to add and remove portffolio sheet 
$( ".add__button" ).on( "click", function() {
  $( ".portfolio-shareholder" ).append( "<div class='portfolio-shareholder-form'><form class='form__details detail-select portfolio__form-box'><label>Ticker <span class='red'>*</span></label><select><option value='1'>A</option><option value='2'>B</option><option value='3'>C</option></select></form> <form class='form__details detail-select portfolio__form-box'><label>Share <span class='red'>*</span></label><input type='text' class='input-text share-input' placeholder='50'></form><form class='form__details detail-select portfolio__form-box'><label>Purchase Date <span class='red'>*</span></label><input type='date' class='input-text ticker-input'></form><form class='form__details detail-select portfolio__form-box'><label>Purchase Price <span class='red'>*</span></label><input type='text' class='input-text share-input' placeholder='450'></form> <form class='form__details detail-select portfolio__form-box'> <div class='form-type radio-type'><input type='checkbox' id='wacc' name='radio-group'> <label for='wacc'>WACC</label> </div> </form> <form class='form__details detail-select portfolio__form-box'> <label> Type</label><input type='text' class='input-text search-input' placeholder='Secondary'><i class='ph-magnifying-glass'></i> </form> <a href='#' class='delete-button'><i class='ph-minus'></i></a> </div>");
  event.preventDefault();
});
$("body").on("click", ".delete-button", function() {
    $(this)
      .parents(".portfolio-shareholder-form")
      .remove();
      event.preventDefault();
  });

  /* select js */

  $("select__form").on("submit", (x) => {
    let result = $("select").val();
    alert(result);
  })