import type { AstroInstance } from "astro"

export const ALL_ICONS = new Proxy<Record<string, AstroInstance>>(
    import.meta.glob("@/icons/*.astro", { eager: true }),
    {
        get: function (importedIcons: Record<string, AstroInstance>, name: string) {
            const iconImportPaths = Object.keys(importedIcons)
            const importPath = iconImportPaths.find((importPath) => {
                const matchedFilename = importPath?.match(/(\w+)\.astro/)
                if (matchedFilename && matchedFilename.length >= 2)
                    return matchedFilename[1]?.toLowerCase() === name.toLowerCase()
                return false
            })

            if (importPath) return importedIcons[importPath]
            return null
        }
    }
);

export const removeTrailingSlash = (str: string) => str.replace(/\/+$/, '');
