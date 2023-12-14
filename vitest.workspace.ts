import * as path from "path"
import { UserWorkspaceConfig, defineWorkspace, mergeConfig } from "vitest/config"

const createConfig = (pkg: string, name: string, config?: UserWorkspaceConfig['test']) => mergeConfig({
  extends: 'vitest.aliases.ts',
  root: path.join(__dirname, pkg),
  test: { name, ...config }
}, config)

export default defineWorkspace([
  createConfig('packages/foo', 'foo'),
  createConfig('packages/foo', 'foo|browser', {
    browser: {
      name: "chrome",
      enabled: true,
      headless: true
    }
  }),
])
