// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Los Angeles', function (err, temp) {
// if (err) {
//   console.log('error', err);
// } else {
//   console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(80);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Los Angeles').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });


function addPromise (num1, num2) {
  return new Promise(function (resolve, reject) {
      if (typeof num1 === 'number' && typeof num2 === 'number') {
        resolve(num1 + num2);
      } else {
        reject('Num1 & Num2 need to be numbers');
      };
  });
}

addPromise(4, 5).then(function (sum) {
  console.log('Promise success - Sum: ', sum);
}, function (err) {
  console.log('Promise error - Unable to find sum', err);
});

addPromise(4, 'Danny').then(function (sum) {
  console.log('this should not show up');
}, function (err) {
  console.log('this should appear', err);
});
