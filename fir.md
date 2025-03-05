<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>weather app</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
 <link rel="stylesheet" href="weather.css">

</head>
<body>
<main class="container">
<header class="input">
    <input type="text" class="city" placeholder="search city">
    <button class="search btn">
        
    </button>
</header>
</main>
</body>
</html>






@import url('https://fonts.googleapis.com/css?family=Poppins: itol,wght00,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,90 0:1,100:1,200;1,300;1,400;1,500;1,600;1,700:1,800;1,9006displa y-swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins" , sans-serif;

}
  body{
    background: url(global.webp); 
    background-repeat: no-repeat; 
     width: 100%;
    height: 100dvh;
     background-size: cover; 
     background-position: center; 
} 
body::before{
content: " ";
position: absolute;
width: 100%;
height: 100dvh;
background: rgb(0, 0, 0, 0.15);
backdrop-filter: blur(15px);
} 
.container{
   /* border-radius: solid; */
    width: 300px;
    height: 496px;
    z-index: 1;
    background: linear-gradient(to top,rgb(0, 0, 0, 0.15),
    rgb(255 , 255, 255, 0.15));
    border-radius: 12px;
    backdrop-filter: blur(100px);
   
 
  
}
