const Sidebar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='sidebar-mask'></div>
      <aside className='sidebar'>
        <ul className='sidebar-links'>
          <li className='active'>Header</li>
          <li>Description</li>
          <li>People Involved</li>
          <li>Needs & Requirements</li>
          <li>Built With</li>
          <li>Top Features</li>
          <li>Screenshots</li>
          <li>Best Practices</li>
          <li>Contact</li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
