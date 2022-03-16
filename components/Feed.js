import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggetions from './Suggetions'
import { useSession } from 'next-auth/react'

function Feed() {
  const { data: session } = useSession()

  return (
    <main className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${!session && '!grid-cols-1 !max-w-3xl'}`}>
      {/* Section Left */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Post */}
        <Posts />
      </section>

      {/* Section Right */}
      {session && (
        <section className="hidden md:col-span-1 xl:inline-grid">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggetions />
          </div>
        </section>
      )}
    </main>
  )
}

export default Feed
