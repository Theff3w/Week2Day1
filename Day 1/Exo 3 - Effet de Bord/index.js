/*
const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}
setTimeout(log.save, 500);
*/
const log = {
    count: 100,
    save: () => {
        'use strict';
        console.log(this.count);
    }
}

setTimeout(log.save, 500);