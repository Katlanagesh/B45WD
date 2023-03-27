//Display countdown from 10 to 1 on screen and then display
// Happy Independence day on the screen
let time = document.getElementById('display');
setTimeout(function () {
    time.innerHTML="10"; 
    setTimeout(function () {
        time.innerHTML=" 9";
        setTimeout(function () {
            time.innerHTML=" 8";
            setTimeout(function() {
                time.innerHTML="7";
                setTimeout(function () {
                    time.innerHTML="6";
                    setTimeout(function () {
                        time.innerHTML="5";
                        setTimeout(function () {
                            time.innerHTML="4";
                            setTimeout(function () {
                                time.innerHTML="3";
                                setTimeout(function () {
                                    time.innerHTML="2";
                                    setTimeout(function () {
                                        time.innerHTML="1";
                                        setTimeout(function () {
                                            time.innerHTML="Happy Independence day";
                                
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);