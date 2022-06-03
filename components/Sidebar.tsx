import Link from 'next/link'

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='sidebar-mask'></div>
      <aside className='sidebar'>
        <ul className='sidebar-links'>
          <li>Links here</li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
