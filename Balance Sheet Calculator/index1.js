    var currrent_liablities=document.getElementsByClassName("currrent_liablities");
    var total_cl=0;
    for(var i=0;i<currrent_liablities.length;i++){
        var a=document.getElementsByClassName("currrent_liablities")[i].value;
        a=parseInt(a);
        total_cl+=a;
    }
    alert(total_cl);
    document.getElementsByClassName("total_currrent_liablities")[0].innerHTML=total_cl;

    var fixed_liablities=document.getElementsByClassName("fixed_liablities");
    var total_fl=0;
    for(var i=0;i<fixed_liablities.length;i++){
        var a=document.getElementsByClassName("fixed_liablities")[i].value;
        a=parseInt(a);
        total_fl+=a;
    }
    alert(total_fl);
    document.getElementsByClassName("total_fixed_liablities")[0].innerHTML=total_fl;
    var total_liablities=total_fl+total_cl;
    document.getElementsByClassName("total_liablities_ans")[0].innerHTML=total_liablities;