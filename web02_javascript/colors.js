const COLOR = 'color';
const BODY = 'body';
const BGCOLOR = 'backgroundColor';
const NIGHT = 'night';
const DAY = 'day';
const WHITE = 'white';
const BLACK = 'black';
const BLUE = 'blue';


let Links = {
    setColor: function(color){
        // let alist = document.querySelectorAll('a');
        // let i = 0
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css(COLOR, color);
    }
}

let Body = {
    setColor: function (color){
        // document.querySelector('body').style.color = color;
        $(BODY).css(COLOR, color);
    },
    setBackgroundColor: function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $(BODY).css(BGCOLOR, color);
    }
}

function nightDayHandler(self){
    // let target = document.querySelector(BODY);
    if(self.value === NIGHT){
        Body.setBackgroundColor(BLACK);
        Body.setColor(WHITE);
        self.value = DAY;

        Links.setColor(WHITE);
    }else{
        Body.setBackgroundColor(WHITE);
        Body.setColor(BLACK);
        self.value = NIGHT;

        Links.setColor(BLACK);
    }
}