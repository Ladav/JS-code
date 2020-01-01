/** debouncing-
 *  it is a optimization technique, by using which we try to reduce the number of requests
 *  being made for resouces, which otherwise may result into page freeze. ex- as there are alots
 *  of different operation that happens so radily, that if you try to serve all of them, the 
 *  system may eventually fail example- scrolling a page, resizing window, executing a API call 
 *  for each character typed in the search bar.
 *  Using Debouncing technique we try to reduce the number of call(can be API calls or
 *  function call) being made by introducing some delay between two calls being made, if two
 *  call's difference(in time) is less than the delay than the call can ignored otherwise make
 *  the call.
 */

 /** here i had developed a debounce function which provide a delay between two api calls being 
  *  made against each character type and avoid making call if the diffrence of time of between 
  *  two characters being typed is less than 300ms.
  */

let counter = 0;     

const getSearch = () => {   // function will be called
    console.log("call made. " + counter++);
};

// debounce
const debounce = (fn, d) => {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, d);
    };
};

const runFx = debounce(getSearch, 300);

/**Defination on Internet-
 *  Debouncing in JavaScript is a practice used to improve browser performance. There might be 
 *  some functionality in a web page which requires time-consuming computations. If such a method
 *  is invoked frequently, it might greatly affect the performance of the browser, as JavaScript
 *  is a single threaded language. Debouncing is a programming practice used to ensure that 
 *  time-consuming tasks do not fire so often, that it stalls the performance of the web page.
 *  In other words, it limits the rate at which a function gets invoked.
 */