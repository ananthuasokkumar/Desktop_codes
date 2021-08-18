const debounce = () => {
  let timer_ref;
  return (delay_time, callback) => {
    if(timer_ref){
      clearTimeout(timer_ref)
    }

    timer_ref = setTimeout(() => {
      callback()
      timer_ref = undefined
    }, delay_time)
  }
}

let returned_function = debounce()

returned_function(1000, () => {
  console.log("I am the first request")
})

setTimeout(() => {
  returned_function(1000, () => {
    console.log("I am the second request")
  })
}, 990)