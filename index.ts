import { Directus } from '@directus/sdk'
import { ApiTypes } from './types'

main()

async function main() {
	const directus =
		new Directus<ApiTypes>('http://...')
	const pages = await directus
		.items('pages')
		.readByQuery({
			fields: [
				'id',
				'metadata.title',
				'metadata.description',
				'metadata.slug',
			],
		})
	const page = pages.data?.[0]
	page?.metadata?.slug
}
