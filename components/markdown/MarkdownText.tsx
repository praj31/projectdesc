import { forwardRef } from 'react'
import { useStore } from '../../store'

const MarkdownText = forwardRef<HTMLDivElement>((_: any, ref) => {
  const header = useStore((state) => state.header)
  const description = useStore((state) => state.description)
  const roles = useStore((state) => state.roles)
  const builtwith = useStore((state) => state.builtwith)
  const screenshots = useStore((state) => state.screenshots)
  const contact = useStore((state) => state.contact)
  const githubRepo = header.githubRepo
  const githubUser = header.githubUser
  return (
    <div ref={ref} style={{ display: 'none' }}>
      {/* Header */}
      {/* Shield Badges */}
      {githubRepo &&
        githubUser &&
        `[![Contributors][contributors-shield]][contributors-url]\n[![Forks][forks-shield]][forks-url]\n[![Stargazers][stars-shield]][stars-url]\n[![Issues][issues-shield]][issues-url]\n<br/> \n`}

      {/* Logo */}
      {header.logoURL &&
        `<p align="center">\n<img src="${header.logoURL}" alt="Project Logo" width="144" height="144" />\n</p>\n`}

      {/* Title */}
      {header.title && `<h3 align="center">${header.title}</h3>\n`}

      {/* Subtitle */}
      {header.subtitle && `<p align="center">\n${header.subtitle}\n<br/>`}

      {/* Bug and Feature and Live */}
      {githubRepo &&
        githubUser &&
        `\n<a href="https://github.com/${githubUser}/${githubRepo}/issues" target="_blank" rel="noopener noreferrer">Report Bug</a> • <a href="https://github.com/${githubUser}/${githubRepo}/issues" target="_blank" rel="noopener noreferrer">Request Feature</a>${
          header.liveURL &&
          ` • <a href="${header.liveURL}" target="_blank" rel="noopener noreferrer">View Live</a>`
        }\n</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Description */}
      {/* Objective */}
      {description.objective &&
        `<h3>Project Objective</h3>\n<p>${description.objective}</p>\n<br/>\n`}

      {/* Scope */}
      {description.scope &&
        `<h3>Project Scope</h3>\n<p>${description.scope}</p>\n<br/>\n`}

      {/* Challanges */}
      {description.challenge &&
        `<h3>Project Challenge(s)</h3>\n<p>${description.challenge}</p>\n<br/>\n`}

      {/* Features */}
      {description.features.length > 0 &&
        description.features[0] &&
        `<h3>Project Features</h3>\n<p>\n${description.features
          .map((item) => item && `<li>${item}</li>\n`)
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Roles */}
      {roles.people.length > 0 &&
        roles.people[0] &&
        `<h3>Role(s)</h3>\n<p>\n${roles.people
          .map((item) => item && `<li>${item}</li>\n`)
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Built With */}
      {builtwith.stack.length > 0 &&
        builtwith.stack[0] &&
        `<h3>Built With</h3>\n<p>\n${builtwith.stack
          .map((item) => item && `<li>${item}</li>\n`)
          .join('')}</p>\n<br/>\n`}

      {/* ************************************************************************** */}
      {/* Screenshots */}
      {screenshots.images.length > 0 &&
        screenshots.images[0] &&
        `<h3>Screenshots</h3>\n<p>\n${screenshots.images
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
      {(contact.email ||
        contact.instagram ||
        contact.linkedin ||
        contact.twitter) &&
        `<h3>Contact</h3>\n<p>\n<a href="mailto:${contact.email}" target="_blank" rel="noopener noreferrer">Email</a> • <a href="https://twitter.com/${contact.twitter}" target="_blank" rel="noopener noreferrer">Twitter</a> • <a href="https://instagram.com/${contact.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a> • <a href="https://linkedin.com/in/${contact.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>\n</p>\n<br/><br/>\n\n`}

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
