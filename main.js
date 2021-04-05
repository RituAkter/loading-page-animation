var counter = 0;
        var c = 0;
        var i = setInterval(function(){
            $(".loader_count").html(c);

            counter++;
            c++;

            if(counter == 100){
                clearInterval(i);
            }

        },20);