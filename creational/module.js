var myModule = (function() {
    //private
    let counter = 0;

    //public
    return {
        incrementCounter: () => {
            return counter++;
        },

        resetCounter: () => {
            console.log('Counter was ' + counter);
            counter = 0;
        }
    }
})();