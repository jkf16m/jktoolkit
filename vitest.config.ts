import { defineConfig } from "vitest/config";
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: "node",
        coverage: {
            provider: 'istanbul',
            exclude: ['dist/**/*.*', 'lib/**/*.*', 'jest.config.ts', 'tsup.config.ts']
        }
    },
    resolve:{
        alias:{
            '@src': path.resolve(__dirname, './src'),
        }
    }
});