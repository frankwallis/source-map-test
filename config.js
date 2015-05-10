System.config({
  "transpiler": "typescript",
  "typescriptOptions": {
    "emitDecoratorMetadata": true
  },
  "paths": {
    "*": "*.ts",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "typescript": "github:mhegazy/typescript@v1.5-beta2"
  }
});

