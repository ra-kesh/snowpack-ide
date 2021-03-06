import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let esb: any;
const startService = async () => {
  try {
    await esbuild.initialize({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.13.8/esbuild.wasm',
    });
    esb = esbuild;
  } catch (error) {
    console.log(error);
  }
};

const bundle = async (rawCode: string) => {
  if (!esb) {
    await startService();
  }

  try {
    const result = await esbuild.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });
    return {
      code: result.outputFiles[0].text,
      err: '',
    };
  } catch (error: any) {
    return {
      code: '',
      err: error.message,
    };
  }
};

export default bundle;
