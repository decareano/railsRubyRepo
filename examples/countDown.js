var countDown = function countDown(count) {
  if (count > 0) {
      console.log(count)
      countDown(count - 1);
  }else{
    console.log("Done");
  }
};

countDown(2);
