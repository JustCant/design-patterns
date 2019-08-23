var mySingleton = (() => {
    //private 
    let instance;

    function init() {
        let privateVar = "I'm private";

        let privateMethod = () => {
            console.log(privateVar);
        }

        //public
        return {
            publicMethod: privateMethod
        }
    }

    //check if instance of singleton already exists
    return {
        getInstance: () => {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

let singleA = mySingleton.getInstance();
let singleB = mySingleton.getInstance();
singleA.publicMethod();
console.log(singleA === singleB);