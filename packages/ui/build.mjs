import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import esbuild from 'esbuild';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';
import svgr from 'esbuild-plugin-svgr';
import path from 'path';

const outdir = path.join(process.cwd(), 'dist');
esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    plugins: [
      svgr(),
      vanillaExtractPlugin(),
      preserveDirectivesPlugin({
        directives: ['use client', 'use strict'],
        include: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
      }),
    ],
    format: 'esm',
    loader: { '.css': 'file' },
    outdir,
    external: ['react', 'react-dom'],
  })
  .catch(() => process.exit(1));
