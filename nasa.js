function displayImage(data){
    $('<img>',{
        src:data.url,
        // height:'100px',
        // width:'100px'
    }).appendTo('#image-container');
}




$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    method:'GET',
    success:displayImage,
    data:{
        api_key : 'DEMO_KEY',
        date:'2015-06-21'
    }
});