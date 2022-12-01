import Header from './Header';
import StockDisplay from './StockDisplay';
import coverpageimg from '../img/cover.png';

function Home() {
  return (
    <div>
      <Header />
      <div className="img-container">
        <img className="coverpageimg" src={coverpageimg} alt="stocks" />
        <div className="main-text">Trade Your Plans Not Your Emotions</div>
        <p className="caption">
          Find real-time stock prices below
          {' '}
          <span>&#8595;</span>
        </p>
      </div>
      <StockDisplay />
    </div>
  );
}

export default Home;
