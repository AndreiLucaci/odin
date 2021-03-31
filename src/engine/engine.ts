import vm from 'vm';

interface ICodeEngine {
  run(code: string): string;
}

class CodeEngine implements ICodeEngine {
  run(code: string): string {
    let result = '';
    try {
      const sandbox = {};
      const script = new vm.Script(code);

      const context = vm.createContext(sandbox);

      result = script.runInNewContext(context, {
        displayErrors: true,
        lineOffset: 5,
        columnOffset: 100,
      });
    } catch (err) {
      result = err.message;
    }

    return result;
  }
}

export const codeEngine: ICodeEngine = new CodeEngine();

export default codeEngine;
