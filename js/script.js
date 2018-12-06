jQuery(document).ready(function(){
    axios.get('http://statenweb.mockable.io/conversions/').then(function(info){
        var result=info.data;
        var convRate=result.centimetersInInch;
        var convRate2=result.inchesInCm;
    
        $('#convert').on('click',function(e){
            e.preventDefault();
            var input=$('#input').val();
            var answer=input*convRate;
            $('#answer').html(answer);
        });

        $('#convert2').on('click',function(e2){
            e2.preventDefault();
            var input2=$('#input2').val();
            var answer2=input2*convRate2;
            $('#answer2').html(answer2);
        });

    });

   
});