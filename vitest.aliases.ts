import * as path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  resolve: {
    alias: {
      "foo": path.join(__dirname, "packages/foo/src")
    }
  }
})
