//<BEGIN VIEW=======================

var view = {

    showNumber: function (n) {
        var el = document.getElementById('showResault');
        el.innerHTML = n;
    }

};

//END VIEW==========================

//BEGIN MODEL==========================

var model = {
    number: 0,

    calculate: function (x, y) {
        this.number = x * y;
        var resault = this.number;

        view.showNumber(resault);
    }
};

//END MODEL==========================

//BEGIN CONTROLLER==========================

var contriller = {
    handleClick: function () {
        model.calculate(3, 1);
    }
};

//END CONTROLLER==========================



//ANANYMOS FUNCTION==================

(function () {
    let app = {
        init: function () {
            this.main();
            this.event();
        },
        main: function () {

        },
        event: function () {
            var el = document.getElementById('calcUser');
            el.onclick = contriller.handleClick;
        }
    };
    app.init();
}());