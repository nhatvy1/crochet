const Stats = () => {
  return (
    <section className='stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]'>
      <div className='container mx-auto'>
        <div className="grid grid-cols-1 xl:grid-cols-4">
          {Array.from({ length: 4}, (_, index)=> (
            <div className="stats__item text-center xl:border-r xl:border-accent" key={index}>
              <h3 className="h1 font-primary text-accent">12</h3>
              <p>Years of Experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
