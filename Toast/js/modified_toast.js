M.AutoInit();

converse = ['Valentine:','Hi.','I\'m Valentine.','What\'s your name?','Nicole:','Hi.','It\'s nice meeting you Valentine.','I\'m Nicole.','Valentine:','Do you live around here?','Nicole:','Yeah, I stay a few blocks away.','Valentine:','That\'s great!','I live close by too.','Are you new here?','Nicole:','Yeah, I\'m kinda rounding-up something.','After that, I\'ll travel back to Onitsha.','Valentine:','OK.','I would like to speak with you again.','How about over a date?','Nicole:','I think you should slow down...','We\'ve just met','I gotta catch up now','See you later Valentine','Valentine:','Alright.','Take care.','Bye.'];
console.log(converse.length);

var divCon = $(".container");
divCon.addClass("teal lighten-4");
var ul = $("<ul>");
var count = [];
var buttons = $("a"); 
var start = $("#start");
var stop = $("#stop");
var index = 0;
var click = {
color: "blue"
}

var my_toast = setInterval(()=>{
    M.toast({html: converse[index], classes:"rounded"});
    // index = Math.floor(Math.random()*maxLength);
    index++;
    if(index == (maxLength-1)){
        index = 0;
    }
}, 4000);

clearInterval(my_toast);

function list_toast(e){
    var y = parseInt(e.target.attributes.id.value);
    clearInterval(my_toast);
    var timeout = setTimeout(()=>{
    M.toast({html: converse[y], classes:"rounded"});}, 4000)
}

function modified_toast(){
    var index = 0;
    var maxLength = converse.length;
    my_toast = setInterval(()=>{
        M.toast({html: converse[index], classes:"rounded"});
        index = Math.floor(Math.random()*maxLength);
        // index++;
        // if(index == (maxLength-1)){
        //     index = 0;
        //}
    }, 4000)
}



divCon.append($("<div>").addClass("row").append(

    $("<button>").addClass("btn").attr({onclick:"modified_toast()",id:"start"}).text("Start").css({position:"fixed", top:"0", marginLeft:"10px"})
).append(
    $("<button>").addClass("btn red").attr({onclick:"clearInterval(my_toast)",id:"stop"}).text("Stop").css({position:"fixed", top:"0", marginLeft:"100px"})
));

divCon.append(ul);

for(var i in converse){
    ul.append(
        $("<div>").addClass("row").append(
            $("<div>").addClass("col s6").addClass("offset-s3").append(
                $("<div>").addClass("card-panel").addClass("white").append(
                    $("<li>").append(
                        $("<a>").attr({id:i.toString()}).text(converse[i]).css({color:"black", paddingRight:"100px"})
                    )
                )
            )
        )
    );

}

$("a").hover(function(){
    $(this).css({backgroundColor:"#eee", cursor:"pointer"});
}, function(){
    $(this).css({backgroundColor:"white"})
})

var li = $("li");
for(var x=0; x<li.length; x++){
    li[x].addEventListener("click", list_toast);
}




