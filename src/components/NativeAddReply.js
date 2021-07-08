{
  "_args": [
    [
      "@testing-library/react@11.2.5",
      "C:\\nodejs\\react"
    ]
  ],
  "_from": "@testing-library/react@11.2.5",
  "_id": "@testing-library/react@11.2.5",
  "_inBundle": false,
  "_integrity": "sha512-yEx7oIa/UWLe2F2dqK0FtMF9sJWNXD+2PPtp39BvE0Kh9MJ9Kl0HrZAgEuhUJR+Lx8Di6Xz+rKwSdEPY2UV8ZQ==",
  "_location": "/@testing-library/react",
  "_phantomChildren": {},
  "_requested": {
    "type": "version",
    "registry": true,
    "raw": "@testing-library/react@11.2.5",
    "name": "@testing-library/react",
    "escapedName": "@testing-library%2freact",
    "scope": "@testing-library",
    "rawSpec": "11.2.5",
    "saveSpec": null,
    "fetchSpec": "11.2.5"
  },
  "_requiredBy": [
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/@testing-library/react/-/react-11.2.5.tgz",
  "_spec": "11.2.5",
  "_where": "C:\\nodejs\\react",
  "author": {
    "name": "Kent C. Dodds",
    "email": "me@kentcdodds.com",
    "url": "https://kentcdodds.com"
  },
  "bugs": {
    "url": "https://github.com/testing-library/react-testing-library/issues"
  },
  "dependencies": {
    "@babel/runtime": "^7.12.5",
    "@testing-library/dom": "^7.28.1"
  },
  "description": "Simple and complete React DOM testing utilities that encourage good testing practices.",
  "devDependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@types/react-dom": "^17.0.0",
    "dotenv-cli": "^4.0.0",
    "kcd-scripts": "^7.5.1",
    "npm-run-all": "^4.1.5",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "rimraf": "^3.0.2",
    "typescript": "^4.1.2"
  },
  "engines": {
    "node": ">=10"
  },
  "eslintConfig": {
    "extends": "./node_modules/kcd-scripts/eslint.js",
    "rules": {
      "react/prop-types": "off",
      "react/no-adjacent-inline-elements": "off",
      "import/no-unassigned-import": "off",
      "import/named": "off",
      "testing-library/no-dom-import": "off"
    }
  },
  "eslintIgnore": [
    "node_modules",
    "coverage",
    "dist",
    "*.d.ts"
  ],
  "files": [
    "dist",
    "dont-cleanup-after-each.js",
    "pure.js",
    "pure.d.ts",
    "types"
  ],
  "homepage": "https://github.com/testing-library/react-testing-library#readme",
  "keywords": [
    "testing",
    "react",
    "ui",
    "dom",
    "jsdom",
    "unit",
    "integration",
    "functional",
    "end-to