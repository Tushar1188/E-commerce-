function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Tushar"&& password=="196493900")
    {
        alert("login succesfully");
        return false;

    }
    else
    {
        alert("login failed");
    }

    
}