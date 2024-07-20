import esbuild from 'esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';
import path from 'path';

const outdir = path.join(process.cwd(), 'dist');
esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    plugins: [
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
  })
  .catch(() => process.exit(1));
