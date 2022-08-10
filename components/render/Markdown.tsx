import { useCallback, useRef } from 'react'
import MarkdownHeader from './MarkdownHeader'
import MarkdownPreview from './MarkdownPreview'
import MarkdownText from './MarkdownText'

const RenderMarkdown = () => {
  const markdownRef = useRef<HTMLDivElement>(null)
  const downloadMarkdown = useCallback(() => {
    // console.log(markdownRef.current?.innerText)
    if (markdownRef !== null && markdownRef.current) {
      if (markdownRef.current.innerText.length > 0) {
        const element = document.createElement('a')
        const file = new Blob([markdownRef.current.innerText])
        element.href = URL.createObjectURL(file)
        element.download = 'README.md'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
      }
    }
  }, [])

  return (
    <>
      <MarkdownHeader downloadMarkdown={downloadMarkdown} />
      <MarkdownPreview />
      <MarkdownText ref={markdownRef} />
    </>
  )
}

export default RenderMarkdown
