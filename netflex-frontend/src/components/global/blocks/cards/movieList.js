import Moviecard from './movieCard'

const MovieList = ({data, title}) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
    <div>
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-5 gap-2">
        {data.map((movie,index) => (
          <Moviecard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default MovieList