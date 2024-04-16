const NFTPreviewCard = () => {
  return (
    <section>
      <div className="icon-container">
        <div>
          <img
            className="icon "
            src="./images/image-equilibrium.jpg"
            alt="Ethereum Icon"
          />
        </div>
        <div className="overlay-effect">
          <img
            className="overlay-svg"
            src="./images/icon-view.svg"
            alt="Ethereum SVG"
          />
        </div>
      </div>
      <div className="equilibrium">
        <a href="#">Equilibrium #3429</a>
        <p className="desc">
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
      <div className="eth">
        <div className="value">
          <img src="./images/icon-ethereum.svg" alt="ethereum icon" />
          <p>0.041 ETH</p>
        </div>
        <div className="time">
          <img src="./images/icon-clock.svg" alt="ethereum icon" />
          <p>3 days left</p>
        </div>
      </div>
      <div className="author">
        <img
          className="avatar"
          src="./images/image-avatar.png"
          alt="Jules Wayvern Potrait"
        />
        <p>
          Creation of{' '}
          <a className="author-name" href="#">
            Jules Wyvern
          </a>
        </p>
      </div>
    </section>
  )
}
export default NFTPreviewCard
