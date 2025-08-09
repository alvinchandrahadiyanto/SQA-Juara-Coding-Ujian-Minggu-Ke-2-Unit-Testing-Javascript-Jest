## Install Jest
```
npm install jest --save-dev
```

### Add a corresponding run script to the package.json:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

### Example:

from this:

```
{
  "devDependencies": {
    "jest": "^30.0.5"
  }
}
```

into this:

```
{
  "devDependencies": {
    "jest": "^30.0.5"
  },
  "scripts": {
    "test": "jest"
  }
}
```

### Now you can run tests with:
```
npm test
```