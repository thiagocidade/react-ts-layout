import { HiMenu, HiOutlineSearch, HiPaperAirplane, HiMap, HiOutlineExternalLink } from 'react-icons/hi'

export function Header(){
  return (
    <div>
      <header
      className="w-full bg-white border-b border-white-200 flex justify-between px-5 py-2 text-gray-600 items-center shadow-sm">
          <div className='flex items-center'>
            <a href='#' className='mr-2 p-1 rounded-md hover:bg-gray-50'><HiMenu className='text-gray-600'/></a>
            <a href='#' className='text-2xl text-gray-500'>myControl</a>
          </div>
          <div>
            <div className='flex items-center border border-gray-100 p-1 rounded-[5px]'>
              <HiOutlineSearch className='mx-1 text-gray-200' />
              <input
              className='min-w-[400px] outline-none'
              type="text"
              name="search"
              placeholder="Search..."
              autoComplete='off'
              />
              <span className='border border-gray-100 rounded-sm px-1 text-gray-200'>/</span>
            </div>
          </div>
          <div className='flex items-center'>
            <a href="#" className='p-1 text-gray-400 hover:text-gray-500 mr-2'>
              <HiPaperAirplane />
            </a>
            <a href="#" className='p-1 text-gray-400 hover:text-gray-500 mr-2'>
              <HiMap />
            </a>
            <a href="#" className='p-1 text-gray-400 hover:text-gray-500 mr-4'>
              <HiOutlineExternalLink />
            </a>
            <a href="#" className='h-8 w-8 rounded-full bg-pink-600 text-white flex justify-center items-center'>
                <span className='text-sm'>TC</span>
            </a>
          </div>
      </header>
    </div>
  )
}