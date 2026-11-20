const input = document.querySelector('#message');
const count = document.querySelector('#count');
const remaining = document.querySelector('#remaining');
const warning = document.querySelector("small");
input.addEventListener("input", function()
{
    var len = input.value.length;
    count.textContent = len;
    remaining.textContent = "Remaining: " + (200 - len);
    if (len > 180)
    {
        warning.textContent = "200u asacaqsan yaxinda?!!";
        warning.style.color = "red";
    }
    else
    {
        warning.textContent = "";
    }
});
input.addEventListener('blur', function()
{
    

})