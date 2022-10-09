<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Update</title>
    <!-- link local stylesheet -->
    <link rel="stylesheet" href="style.css">
    <!-- font awesome cdn -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300;1,50">
    <!-- link local javascript -->
    <script src="./script.js" defer></script>
</head>
<body>
    <!-- today's weather -->
    <div class="card">
        <div class="dateTime">
        </div>
        <div class="notification">
        </div>
        <div class="search-box">
            <input class="search-txt" type="text" name="" placeholder="Type to search">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="weather load">
            <h2 class="city">Loading....</h2>
            <h1 class="temp"style="margin:-5px";></h1>
            <div class="flex" style="margin:-16px";>
            <img src="" alt="" class="icon"/>
                <div class="description">
                </div>
            </div>
            <div class="humidity"></div>
            <div class="wind">
            </div>
        </div>
    </div>
    <br>
    <!-- next 7 day's weather -->
    <div class="card other">
        
        <div class="next1">
            <div class="img_block" style="margin:-10px">
            <img src="" alt="" class="icon1"/>
            </div>
            <h3 class="day1" style="margin:5px"></h3>
            <a class="description1"></a>
            <h5 class="temp1-max"style="margin:1.5px"></h5>
            <h5 class="temp1-min"style="margin:1.5px"></h5>
        </div>
        <div class="next2">
            <div class="img_block" style="margin:-10px">
            <img src="" alt="" class="icon2"/>
            </div>
            <h3 class="day2" style="margin:5px"></h3>
            <a class="description2"></a>
            <h5 class="temp2-max"style="margin:1.5px"></h5>
            <h5 class="temp2-min"style="margin:1.5px"></h5>
        </div>
        <div class="next3">
            <div class="img_block" style="margin:-10px">
            <img src="" alt="" class="icon3"/>
            </div>
            <h3 class="day3" style="margin:5px"></h3>
            <a class="description3"></a>
            <h5 class="temp3-max"style="margin:1.5px"></h5>
            <h5 class="temp3-min"style="margin:1.5px"></h5>
        </div>
        <div class="next4">
            <div class="img_block" style="margin:-10px">
            <img src="" alt="" class="icon4"/>
            </div>
            <h3 class="day4" style="margin:5px"></h3>
            <a class="description4"></a>
            <h5 class="temp4-max"style="margin:1.5px"></h5>
            <h5 class="temp4-min"style="margin:1.5px"></h5>
        </div>
        <div class="next5">
            <div class="img_block" style="margin:-10px">
            <img src="" alt="" class="icon5"/>
            </div>
            <h3 class="day5" style="margin:5px"></h3>
            <a class="description5"></a>
            <h5 class="temp5-max"style="margin:1.5px"></h5>
            <h5 class="temp5-min"style="margin:1.5px"></h5>
        </div>
        <div class="next6">
            <div class="img_block" style="margin:-10px">
            <img src="" alt="" class="icon6"/>
            </div>
            <h3 class="day6" style="margin:5px"></h3>
            <a class="description6"></a>
            <h5 class="temp6-max"style="margin:1.5px"></h5>
            <h5 class="temp6-min"style="margin:1.5px"></h5>
        </div>
    </div>
</body>
</html>
