function basicfunction(){
    var current_assets=document.getElementsByClassName("current_assets");
    for(var i=0;i<current_assets.length;i++){
        document.getElementsByClassName("current_assets")[i].defaultValue=0;
    }
    var fixed_assets=document.getElementsByClassName("fixed_assets");
    for(var i=0;i<fixed_assets.length;i++){
        document.getElementsByClassName("fixed_assets")[i].defaultValue=0;
    }
    var current_liablities=document.getElementsByClassName("current_liablities");
    for(var i=0;i<current_liablities.length;i++){
        document.getElementsByClassName("current_liablities")[i].defaultValue=0;
    }
    var fixed_liablities=document.getElementsByClassName("fixed_liablities");
    for(var i=0;i<fixed_liablities.length;i++){
        document.getElementsByClassName("fixed_liablities")[i].defaultValue=0;
    }
}

document.getElementById("calculate_btn").addEventListener('click',function(event){
    event.preventDefault();
    var current_assets=document.getElementsByClassName("current_assets");
    var total_ca=0;
    for(var i=0;i<current_assets.length;i++){
        var a=document.getElementsByClassName("current_assets")[i].value;
        a=parseInt(a);
        total_ca+=a;
    }
    // alert(total_ca);
    document.getElementsByClassName("total_current_assets")[0].innerHTML=total_ca;

    var fixed_assets=document.getElementsByClassName("fixed_assets");
    var total_fa=0;
    for(var i=0;i<fixed_assets.length;i++){
        var a=document.getElementsByClassName("fixed_assets")[i].value;
        a=parseInt(a);
        total_fa+=a;
    }
    // alert(total_fa);
    document.getElementsByClassName("total_fixed_assets")[0].innerHTML=total_fa;
    var total_assets=total_fa+total_ca;
    document.getElementsByClassName("total_assets_ans")[0].innerHTML=total_assets;


    var current_liablities=document.getElementsByClassName("current_liablities");
    var total_cl=0;
    for(var i=0;i<current_liablities.length;i++){
        var a=document.getElementsByClassName("current_liablities")[i].value;
        a=parseInt(a);
        total_cl+=a;
    }
    // alert(total_cl);
    document.getElementsByClassName("total_current_liablities")[0].innerHTML=total_cl;

    var fixed_liablities=document.getElementsByClassName("fixed_liablities");
    var total_fl=0;
    for(var i=0;i<fixed_liablities.length;i++){
        var a=document.getElementsByClassName("fixed_liablities")[i].value;
        a=parseInt(a);
        total_fl+=a;
    }
    // alert(total_fl);
    document.getElementsByClassName("total_fixed_liablities")[0].innerHTML=total_fl;
    var total_liablities=total_fl+total_cl;
    document.getElementsByClassName("total_liablities_ans")[0].innerHTML=total_liablities;
    var working_captial=parseInt(document.getElementsByClassName("total_current_assets")[0].innerHTML)-parseInt(document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    var current_ratio=0;
    current_ratio=parseFloat(current_ratio);
    current_ratio=parseFloat(document.getElementsByClassName("total_current_assets")[0].innerHTML)/parseFloat(document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    var Quick_Assets=parseInt(document.getElementsByClassName("total_current_assets")[0].innerHTML)-parseInt(document.getElementsByClassName("inventory")[0].value);
    var acid_test=0;
    acid_test=parseFloat(acid_test);
    acid_test=parseFloat(Quick_Assets)/parseFloat(document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    document.getElementsByClassName("w_c")[0].innerHTML="Working Capital = "+working_captial;
    document.getElementsByClassName("c_r")[0].innerHTML="Current Ratio = "+current_ratio;
    document.getElementsByClassName("q_a")[0].innerHTML="Quick Assets = "+Quick_Assets;
    document.getElementsByClassName("a_t")[0].innerHTML="Acid Test = "+acid_test;
    document.getElementsByClassName("hidden")[0].style.display="block";

    
})


function pdf_maker(){
    window.jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    doc.setFont("bold");
    var working_captial=parseInt(document.getElementsByClassName("total_current_assets")[0].innerHTML)-parseInt(document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    var current_ratio=0;
    current_ratio=parseFloat(current_ratio);
    current_ratio=parseFloat(document.getElementsByClassName("total_current_assets")[0].innerHTML)/parseFloat(document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    var Quick_Assets=parseInt(document.getElementsByClassName("total_current_assets")[0].innerHTML)-parseInt(document.getElementsByClassName("inventory")[0].value);
    var acid_test=0;
    acid_test=parseFloat(acid_test);
    acid_test=parseFloat(Quick_Assets)/parseFloat(document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    doc.setFontSize(22);
    doc.setFont("bold");
    doc.text(20, 20, 'Balance Sheet Reciept in (RS)');
    doc.setFontSize(15)
    doc.setFont("times");
    doc.text(20,35,"Total Current Assets = " +document.getElementsByClassName("total_current_assets")[0].innerHTML);
    doc.text(20,45,"Total Fixed Assets = "+document.getElementsByClassName("total_fixed_assets")[0].innerHTML);
    doc.text(20,55,"Total Current Liablities = " +document.getElementsByClassName("total_current_liablities")[0].innerHTML);
    doc.text(20,65,"Total Fixed Liablities = "+document.getElementsByClassName("total_fixed_liablities")[0].innerHTML);
    doc.text(20,75,"Working Capital = "+working_captial);
    doc.text(20,85,"Current Ratio = "+current_ratio);
    doc.text(20,95,"Quick Assets = "+Quick_Assets);
    doc.text(20,105,"Acid Test = "+acid_test);
    doc.save('Reciept.pdf');
}