import PreviewBuiltWith from './preview/PreviewBuiltWith'
import PreviewContact from './preview/PreviewContact'
import PreviewDescription from './preview/PreviewDescription'
import PreviewHeader from './preview/PreviewHeader'
import PreviewRoles from './preview/PreviewRoles'
import PreviewScreenshots from './preview/PreviewScreenshots'

const MarkdownPreview = () => {
  return (
    <>
      <PreviewHeader />
      <PreviewDescription />
      <PreviewRoles />
      <PreviewBuiltWith />
      <PreviewScreenshots />
      <PreviewContact />
    </>
  )
}

export default MarkdownPreview
