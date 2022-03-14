import Link from 'next/link'
import formatUrl from 'lib/formatUrl'
import { paths } from 'interfaces/apiTypes'

type Props = {
  token: NonNullable<
    paths['/tokens/details']['get']['responses']['200']['schema']['tokens']
  >[0]['token']
}

const TokenAttributes = ({ token }: Props) => {
  return (
    <article className="mb-6 max-w-[500px] overflow-hidden rounded-[16px] border-[1px] border-gray-300 bg-white p-6">
      <p className="reservoir-h5 mb-4">Attributes</p>
      <div className="grid max-w-sm grid-cols-3 gap-2">
        {token?.attributes?.map(({ key, value }) => (
          <Link
            key={`${key}-${value}`}
            href={`/collections/${token?.collection?.id}?${formatUrl(
              `attributes[${key}]`
            )}=${formatUrl(`${value}`)}`}
          >
            <a className="rounded-lg border border-gray-300 transition  hover:shadow-md">
              <p className="reservoir-subtitle truncate p-3 text-center">
                {key}
              </p>
              <p
                className="reservoir-subtitle truncate bg-primary-100 p-3 text-center"
                title={value}
              >
                {value}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </article>
  )
}

export default TokenAttributes
