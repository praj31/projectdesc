import { forwardRef, useContext } from 'react'
import { StateContext } from '../../context'

const MarkdownText = forwardRef<HTMLDivElement>((_: any, ref) => {
  const { state } = useContext(StateContext)
  const { githubUser, githubRepo } = state.header
  return (
    <div ref={ref} style={{ display: 'none' }}>
      {/* Header Section */}
      {/* Shield Badges */}
      {githubRepo &&
        githubUser &&
        `[![Contributors][contributors-shield]][contributors-url]\n[![Forks][forks-shield]][forks-url]\n[![Stargazers][stars-shield]][stars-url]\n[![Issues][issues-shield]][issues-url]\n<br/> \n`}

      {/* Logo */}
      {state.header.logoURL &&
        `<p align="center">\n<img src=${state.header.logoURL} alt="Project Logo" width="96" height="96" />\n</p>\n`}

      {/* Title */}
      {state.header.title &&
        `<h2 style="text-align:center;font-size:32px;">${state.header.title}</h2>\n`}

      {/* Subtitle */}
      {state.header.subtitle &&
        `<p align="center">\n${state.header.subtitle}\n<br/>`}

      {/* Bug and Feature and Live */}
      {githubRepo &&
        githubUser &&
        `\n<a href=https://github.com/${githubUser}/${githubRepo}/issues}>Report Bug</a> • <a href=https://github.com/${githubUser}/${githubRepo}/issues>Request Feature</a>${
          state.header.liveURL &&
          ` • <a href=${state.header.liveURL}>View Live</a>`
        }\n</p><br/><br/>\n`}

      {/* Variables */}
      {/* Sheild Badges URL */}
      {githubRepo &&
        githubUser &&
        `\n[contributors-shield]: https://img.shields.io/github/contributors/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[contributors-url]: https://github.com/${githubUser}/${githubRepo}/graphs/contributors \n[forks-shield]: https://img.shields.io/github/forks/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[forks-url]: https://github.com/${githubUser}/${githubRepo}/network/members \n[stars-shield]: https://img.shields.io/github/stars/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[stars-url]: https://github.com/${githubUser}/${githubRepo}/stargazers \n[issues-shield]: https://img.shields.io/github/issues/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[issues-url]: https://github.com/${githubUser}/${githubRepo}/issues \n`}
    </div>
  )
})

export default MarkdownText
