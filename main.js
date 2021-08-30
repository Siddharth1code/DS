var st=[];
function show()
{
    var a=[];
    for(i=1;i<=4;i++)
    {
var n1=document.getElementById("student_"+i).value;
a.push(n1);
    }
    var len=a.length;
    for(j=0;j<len;j++)
    {
        st.push("<h4>name" +a[j]+"</h4>");
    }
document.getElementById("d").innerHTML=st;
var remove=st.join("");
document.getElementById("e").innerHTML=remove;
}
function sort()
{
st.sort();
var len=st.length;
for(j=0;j<len;j++)
    {
        st.push("<h4>name" +a[j]+"</h4>");
    }
document.getElementById("d").innerHTML=st;
var remove=st.join("");
document.getElementById("e").innerHTML=remove;

}