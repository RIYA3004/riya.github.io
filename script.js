// json : javascript object notation
fetch('data.json')
.then(response=>response.json())
.then(data=>{
    console.log(data);
    document.querySelector('#gr').innerHTML=data.section2[0].heading;
    document.querySelector('#grdesc').innerHTML = data.section2[0].text;
    document.querySelector('#grimg').src = data.section2[0].image;
    
    document.querySelector('#mtn').innerHTML=data.section2[1].heading;
    document.querySelector('#mtndesc').innerHTML = data.section2[1].text;
    document.querySelector('#mtnimg').src = data.section2[1].image;
    

    document.querySelector('#uni').innerHTML=data.section2[2].heading;
    document.querySelector('#unidesc').innerHTML = data.section2[2].text;
    document.querySelector('#uniimg').src = data.section2[2].image;
    
    document.querySelector('#la').innerHTML=String(data.section3.text).substring(0, 299)+'<br><br>'+String(data.section3.text).substring(299, 699);;// doubt how to insert space here is the question
    // doubt how to insert space here is the question
    //document.querySelector('#la1').innerHTML=

   // hollyimg

    document.querySelector('#hollyimg').src=data.section4[0].image;
    document.querySelector('#beachimg').src=data.section4[1].image;
    //document.querySelector('#unidesc').innerHTML = data.section2[2].text;
   // document.querySelector('#uniimg').src = data.section2[2].image;

   document.querySelector('#hollytitle').innerHTML = data.section4[0].heading;
   document.querySelector('#beachtitle').innerHTML = data.section4[1].heading;

   document.querySelector('#holly').innerHTML = data.section4[0].text;
   document.querySelector('#beach').innerHTML = data.section4[1].text;

})