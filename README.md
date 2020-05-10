# developersConnector
A platform for connecting developers. Based on MERN stack.

## Pre-requisites for installation:
1. Node js
2. MongoDB Atlas(An account and cluster created)
3. NPM

## Quick Start 

1. Clone the above repository on your local system.

2. Set up database credentials in config file. Create a db.js file in config and add the following credentials replacing the username and password.
 ```js
 {
    "mongoURI": "mongodb+srv://<username>:<password>@cluster0-ltnuo.mongodb.net/test?retryWrites=true&w=majority",
    "jwtSecret": "mysecrettoken",
    "githubClientId": "506d7b2e2485d644bbe2",
    "githubSecret": "bb2eaa0ac223a75d4944b229990b0e768c467b52"
}
```

3. Run the following command in root directory

```bash
  npm install
```

4. Application will fireup on <http://localhost:3000/>

## Contributions

Pull requests are welcome.

## Author

**Fatima Rahman**

## Version

1.0.0

## License

MIT
