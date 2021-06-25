import type * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        // console.log('onResolve', args);

        // Handle root entry file of 'index.js'
        if (args.path === 'index.js') {
          return { path: args.path, namespace: 'a' };
        }

        // Handle relative paths in a module
        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            namespace: 'a',
            path: new URL(
              args.path,
              'https://unpkg.com' + args.resolveDir + '/',
            ).href,
          };
        }

        // Handle main file of a module
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};
