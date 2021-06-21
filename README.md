# Lyft-Demo
-----
This is a simple demo for an app serive with a cut-string function which only keeps every third charater of the input string.

### Running Locally
Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:ChicheT/Lyft-Demo.git
cd Lyfy-Demo
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### Testing Locally
- Postman </br>
  Use "Post" method and its body should be a jason format containing the key "string_to_cut". 
- Curl

```sh
curl -X POST 127.0.0.1:5000/test --data '{"string_to_cut": "string_to_test"}' -H 'Content-Type: application/json'
```



