function throttler(){
  let timer_ref;
  return function(delay_time, callback){
    if(timer_ref !== undefined){
      return
    }

    timer_ref = setTimeout(() =>{
      callback()
      timer_ref = undefined
    }, delay_time)
  }
}

let returned_function = throttler()
function network_request(){
  console.log("I am network request")
}

returned_function(1000, () => {
  console.log("I am the first request")
})
// returned_function(1000, network_request)
setTimeout(() => {
  returned_function(1000, () => {
    console.log("I am the second request")
  })
}, 990)
