declare interface TestData {
    input: string;
    output: string;
}

declare module '*.json' 

interface Global {
    main: function
  }
  declare var global: Global