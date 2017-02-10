# HTTP 1 vs 2

Node app to compare http 1 vs 2 protocol.

# Running

```
node http-1.js
```

Console

```
Listening on port: 3001.
```

![](doc/out-1.png)

```
node http-2.js
```

Console

```
Listening on port: 3002.
```

![](doc/out-2.png)


# Result

| Protovcol        | Size           | Time  |
| ------------- |:-------------:| -----:|
| http/1    | 223B| 25ms |
| http/2      | 48B      |   21ms|
