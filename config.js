System.config({
  "transpiler": "traceur",
  "paths": {
    "*": "*.ts",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "typescript": "github:Arnavion/typescript-github@master"
  }
});

