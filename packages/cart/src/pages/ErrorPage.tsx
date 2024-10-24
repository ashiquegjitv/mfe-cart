import { PageErrorLayout } from "#components/PageErrorLayout"

function ErrorPage(): JSX.Element {
  return (
    <PageErrorLayout statusCode={404} message="This order is not accessible. page updated" />
  )
}

export default ErrorPage
