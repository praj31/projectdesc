import { useCallback, useRef } from 'react'
import MarkdownHeader from '../markdown/MarkdownHeader'
import MarkdownPreview from '../markdown/MarkdownPreview'
import MarkdownText from '../markdown/MarkdownText'

const RenderMarkdown = () => {
  const markdownRef = useRef<HTMLDivElement>(null)
  const downloadMarkdown = useCallback(() => {
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
    <section>
      <MarkdownHeader downloadMarkdown={downloadMarkdown} />
      <MarkdownPreview />
      <MarkdownText ref={markdownRef} />
    </section>
  )
}

export default RenderMarkdown
