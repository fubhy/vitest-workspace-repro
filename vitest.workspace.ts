import * as path from "path"
import { defineProject, defineWorkspace, mergeConfig } from "vitest/config"

const shared = defineProject({
  test: {
    root: path.join(__dirname, "packages/foo"),
    alias: {
      "foo": path.join(__dirname, "packages/foo/src")
    }
  }
})

export default defineWorkspace([
  mergeConfig(shared, defineProject({
    test: {
      name: "foo",
    }
  })),
  mergeConfig(shared, defineProject({
    test: {
      name: "foo|browser",
      browser: {
        name: "chrome",
        enabled: true,
        headless: true
      }
    }
  })),
])
