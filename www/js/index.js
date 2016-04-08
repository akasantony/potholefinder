function timeOut(){
    setTimeout(function() {
        window.location.href = "form.html";
    }, 3000);
}

var app = {
    initialize: function() {this.onDeviceReady()},
    bindEvents: function() {var y = 0},
    onDeviceReady: function() {
        timeOut();
    }
};

app.initialize();
