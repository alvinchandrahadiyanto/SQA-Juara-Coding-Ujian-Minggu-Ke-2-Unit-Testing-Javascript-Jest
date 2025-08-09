# Ujian Minggu ke 2 SQA Juara Coding Batch 20 Javascript

Ini adalah soal ujian bootcamp yang dikerjakan ulang dalam bahasa javascript
https://github.com/alvinchandrahadiyanto/SQA-Juara-Coding-Ujian-Minggu-Ke-2-Unit-Testing-Java-TestNG

Semua ketentuan sudah ada di web tersebut

## Install Jest
```
npm install jest --save-dev
```

### Add a corresponding run script to the package.json:

```
  "scripts": {
    "test": "jest"
  },
  "type": "module"
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
  },
  "type": "module"
}
```

### Now you can run tests with:
```
npm test
```