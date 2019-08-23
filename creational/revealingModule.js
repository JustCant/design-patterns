var revealingModule = (function() {
    //private
    var count = 0;

    function incrementCount() {
        return count++;
    }

    function decrementCount() {
        return count--;
    }

    function getCount() {
        console.log(count);
    }
    
    //public
    return {
        increment: incrementCount,
        decrement: decrementCount,
        count: getCount
    }
})();

revealingModule.increment();
revealingModule.increment();
revealingModule.count();
revealingModule.decrement();
revealingModule.count();