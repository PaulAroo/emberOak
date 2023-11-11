import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	schema: "http://localhost:3000/api/graphql",
	documents: ["**/*.{ts,tsx}"],
	ignoreNoDocuments: true,
	generates: {
		"./__generated__/": {
			preset: "client",
			config: {
				strictScalars: true,
				useTypeImports: true,
				avoidOptionals: true,
				scalars: {
					DateTime: "Date",
					Upload: "File",
					JSON: "{ [key: string]: any }",
				},
			},
		},
	},
}

export default config
