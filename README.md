# shr-node-server
This project is a NodeJS server implementation of the shr-rest-api.


## Running the server
In order to start the server, run the following command from within the `nodejs-server-server` directory:

```
node index.js
```

## Generating Code
Code in the `nodejs-server-server` directory was generated using the Swagger Online Editor (https://editor.swagger.io/).

Code in the `fluxImplementation` directory are files used specifically in the Flux Project, which is a part of the Standard Health Record Collaborative (see https://github.com/standardhealth/flux).

If an updated swagger.json or swagger.yaml file is defined, a new NodeJS implementation will need to be generated. It can be generated using the Swagger Online Editor, or other Swagger tools. The new server implementation should replace the `nodejs-server-server` directory.

## Manual Edits to Generated Code
In order to have the NodeJS server implementation use code specific to the Flux Project, a few lines need to be added to the generated code.

1. In `nodejs-server-server/controllers/DefaultService.js`, import the `fluxImplementation/defaultHandlers.js` file.
2. In each function, add the appropriate function from the `defaultHandlers.js` file to execute the desired outcome, passing in all parameters. See each function for the appropriate line to add.

## Response Headers
The index.js file also has manually set headers for responses. Swagger-codegen will not replace modified index.js files, but if new files are downloaded from the online editor, index.js will need to be modified to include necessary response headers.

The headers to include:
```
// Add headers - NOTE: These were manually added. Using swagger-codegen tool will not replace a modified index.js file
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
```
