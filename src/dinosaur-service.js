export default class DinosaurService {
  static getDinosaurs(num) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=1&words=${num}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject(this, response);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}