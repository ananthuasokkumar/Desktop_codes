var str = "Visit MicrosoGGHH!";
var a=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var count = 0;
for (var i = 0; i < str.length; i++)
{
    for (var j = 0; j < 26; j++)
    {
        if (str[i] == a[j])
            count++
        }
}
console.log(count);