type ID = string | number

export type ApiTypes = {
	pages: Page
}

type Page = {
	id?: ID
	metadata?: PageMetadata
}

type Language = {
	code?: string
	iso?: string
	name?: string
}

type PageMetadata = {
	id?: ID
	language_code?: string | Language
	title?: string
	description?: string
	keywords?: string
	slug?: string
}
