import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-12 py-24">
      <header>
        <nav className='flex sm:justify-center space-x-3'>
          {[
            ['Home', '/dashboard'],
            ['About', '/team'],
            ['Projects', '/projects'],
            ['Resume', '/resume'],
          ].map(([title, url]) => (
            <a href={url} className='rounded-lg px-3 py-2 text-slate-700 hover:text-white ease-in-out duration-300'>{title}</a>
          ))}
        </nav>
      </header>
      <h1 className='text-5xl py-10'>Hi, I'm Hayden</h1> 
      <h2 className='text-2xl py-2'>Software Engineer | Ex-AWS</h2>
      <div className='flex flex-col md:flex-row'>
        <Image
          src='/images/avi.png'
          width={500}
          height={500}
          style={{objectFit: "contain"}}
          alt="A picture of the author"
        />
          <p className='py-10 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
    </main>
  )
}
