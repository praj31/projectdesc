import { forwardRef, useContext } from 'react'
import { StateContext } from '../../context'

const MarkdownText = forwardRef<HTMLDivElement>((_: any, ref) => {
  const { state } = useContext(StateContext)
  const { githubUser, githubRepo } = state.header
  return (
    <div ref={ref} style={{ display: 'none' }}>
      {/* Header */}
      {/* Shield Badges */}
      {githubRepo &&
        githubUser &&
        `[![Contributors][contributors-shield]][contributors-url]\n[![Forks][forks-shield]][forks-url]\n[![Stargazers][stars-shield]][stars-url]\n[![Issues][issues-shield]][issues-url]\n<br/> \n`}

      {/* Logo */}
      {state.header.logoURL &&
        `<p align="center">\n<img src="${state.header.logoURL}" alt="Project Logo" width="144" height="144" />\n</p>\n`}

      {/* Title */}
      {state.header.title &&
        `<h2 style="text-align:center;font-size:32px;">${state.header.title}</h2>\n`}

      {/* Subtitle */}
      {state.header.subtitle &&
        `<p align="center">\n${state.header.subtitle}\n<br/>`}

      {/* Bug and Feature and Live */}
      {githubRepo &&
        githubUser &&
        `\n<a href="https://github.com/${githubUser}/${githubRepo}/issues" target="_blank" rel="noopener noreferrer">Report Bug</a> • <a href="https://github.com/${githubUser}/${githubRepo}/issues" target="_blank" rel="noopener noreferrer">Request Feature</a>${
          state.header.liveURL &&
          ` • <a href="${state.header.liveURL}" target="_blank" rel="noopener noreferrer">View Live</a>`
        }\n</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Description */}
      {/* Objective */}
      {state.description.objective &&
        `<h2>Project Objective</h2>\n<p>${state.description.objective}</p>\n<br/>\n`}

      {/* Scope */}
      {state.description.scope &&
        `<h2>Project Scope</h2>\n<p>${state.description.scope}</p>\n<br/>\n`}

      {/* Challanges */}
      {state.description.challenge &&
        `<h2>Project Challenge(s)</h2>\n<p>${state.description.challenge}</p>\n<br/>\n`}

      {/* Features */}
      {state.description.features.length > 0 &&
        state.description.features[0] &&
        `<h2>Project Features</h2>\n<p>\n${state.description.features
          .map((item) => item && `<li>${item}</li>\n`)
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Roles */}
      {state.roles.people.length > 0 &&
        state.roles.people[0] &&
        `<h2>Role(s)</h2>\n<p>\n${state.roles.people
          .map((item) => item && `<li>${item}</li>\n`)
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Built With */}
      {state.builtwith.stack.length > 0 &&
        state.builtwith.stack[0] &&
        `<h2>Built With</h2>\n<p>\n${state.builtwith.stack
          .map((item) => item && `<li>${item}</li>\n`)
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Screenshots */}
      {state.screenshots.images.length > 0 &&
        state.screenshots.images[0] &&
        `<h2>Screenshots</h2>\n<p>\n${state.screenshots.images
          .map(
            (item, idx) =>
              item &&
              `<img src="${item}" alt="Project Screenshot ${
                idx + 1
              }" width="100%" height="auto" />\n`
          )
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Contact */}
      {/* Email */}
      {(state.contact.email ||
        state.contact.instagram ||
        state.contact.linkedin ||
        state.contact.twitter) &&
        `<h2>Contact</h2>\n<p>\n<a href="mailto:${state.contact.email}" target="_blank" rel="noopener noreferrer">Email</a> • <a href="https://twitter.com/${state.contact.twitter}" target="_blank" rel="noopener noreferrer">Twitter</a> • <a href="https://instagram.com/${state.contact.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a> • <a href="https://linkedin.com/in/${state.contact.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>\n</p>\n<br/><br/>\n\n`}

      {/* ************************************************************************** */}
      {/* Variables */}
      {/* Sheild Badges URL */}
      {githubRepo &&
        githubUser &&
        `\n[contributors-shield]: https://img.shields.io/github/contributors/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[contributors-url]: https://github.com/${githubUser}/${githubRepo}/graphs/contributors \n[forks-shield]: https://img.shields.io/github/forks/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[forks-url]: https://github.com/${githubUser}/${githubRepo}/network/members \n[stars-shield]: https://img.shields.io/github/stars/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[stars-url]: https://github.com/${githubUser}/${githubRepo}/stargazers \n[issues-shield]: https://img.shields.io/github/issues/${githubUser}/${githubRepo}.svg?style=for-the-badge \n[issues-url]: https://github.com/${githubUser}/${githubRepo}/issues \n`}
    </div>
  )
})

MarkdownText.displayName = 'MarkdownText'

export default MarkdownText
