export default function () {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000);
  });
}