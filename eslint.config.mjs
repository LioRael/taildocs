import { tanstackConfig } from "@tanstack/eslint-config"
import recommendedConfig from "eslint-plugin-prettier/recommended"

const customTanstackConfig = tanstackConfig.map((config) => {
  if (config.rules) {
    const newConfig = { ...config }
    const newRules = { ...config.rules }

    Object.keys(newRules).forEach((key) => {
      if (key.startsWith("import/")) {
        delete newRules[key]
      }
    })

    newRules["sort-imports"] = "off"

    newConfig.rules = newRules
    return newConfig
  }

  return config
})

export default [...customTanstackConfig, recommendedConfig]
