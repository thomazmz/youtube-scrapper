export const waitTimeout = (time: number) => new Promise(function(resolve) { 
  setTimeout(resolve, time)
});
