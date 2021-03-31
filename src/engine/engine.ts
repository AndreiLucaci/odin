/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
import vm from 'vm';
import typescript from 'typescript';
import { CodeEngineLanguage } from '../types';

interface ICodeEngine {
  run(code: string, type?: CodeEngineLanguage): string;
}

class CodeEngine implements ICodeEngine {
  run(code: string, type?: CodeEngineLanguage): string {
    type = type ?? CodeEngineLanguage.JAVASCRIPT;
    let result = '';
    try {
      const workingCode =
        type === CodeEngineLanguage.TYPESCRIPT ? this.transpile(code) : code;

      const context = vm.createContext({ require: require });

      const script = new vm.Script(workingCode, {
        displayErrors: true,
        lineOffset: 5,
        columnOffset: 100,
      });

      result = script.runInNewContext(context) + '';
    } catch (err) {
      result = err.message;
    }

    return result;
  }

  private transpile(code: string): string {
    let result = '';
    try {
      const transpile = typescript.transpileModule(code, {
        compilerOptions: {
          module: typescript.ModuleKind.CommonJS,
        },
      });
      result = transpile.outputText;
    } catch (err) {
      result = err.message;
    }
    return result;
  }
}

export const codeEngine: ICodeEngine = new CodeEngine();

export default codeEngine;
