let count = 0;
document.getElementById("decrease").onclick = function()
{
    count = count - 1;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("reset").onclick = function()
{
    count = 0
    document.getElementById("count").innerHTML = count;
}
document.getElementById("increase").onclick = function()
{
    count = count + 1;
    document.getElementById("count").innerHTML = count;
}