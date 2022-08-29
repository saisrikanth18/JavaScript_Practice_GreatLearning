/* Create a Json Object having field-

1. name=”Json”
2. type=”Exchange format”
3. similarTypes=[“XML”,”YML”,”CSV”]
4. rating=10
 

Now after creating this Json Object wrap it in a string and then use JSON.parse method to parse it into a Javascript object and then print that Javascript object. */

const json=`{
    "name":"JSON",
    "type":"Exchange format",
    "similarTypes":["XML","YML","CSV"],
    "rating":10
}`;

var jsObj=JSON.parse(json);
console.log(jsObj);