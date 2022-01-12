import { someFilms } from "../data"

const Films = () => {
  return (
    <div className="lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 grid gap-4 mt-28 auto-rows-fr">   
      {someFilms.map(film => {
        const {id,url} = film;
        return (
          <div key={id}>
            <img src={url} alt=''/>
            <h4>122121</h4>
          </div>
        )
      })}
      

    </div>
  )
}

export default Films
