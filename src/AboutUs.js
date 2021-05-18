import "./AboutUs.css";
import Separator from "./Separator";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__container">
        <div className="aboutUs__elem">
          <p>
            <span className="highlight-text">About Us:</span> BarBets originated
            within the last year to provide a new and fun marketing tool for all
            sport bars. As bars are slowly welcoming customers back, we decided
            to come up with a way to make your bar stand out. BarBets allows the
            bar owner to post promotions related to sporting events bringing in
            new customers for an exciting day or night.
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            <span className="highlight-text">How it works:</span> The
            administrative portal is a website for bar owners to log on and post
            a promotion. This allows the bar owner to get creative by offering a
            wager for a straight, parlay, over/under or a prop bet. To ensure
            app users show up on game day, a pin will be provided by the bar to
            confirm the app users arrival. The app will also allow you to put a
            minimum spend requirement to claim a prize.
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            <span className="highlight-text">Straight Bet: </span> Allows the
            player to pick a teams spread in one game.
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            <span className="highlight-text">Parlay Bet:</span> Allows the
            player to pick a teams spread in 2 or more games.
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            <span className="highlight-text">Over/Under Bet:</span> Allows the
            player to pick if there will be more or less runs/points/goals in
            that game.
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            <span className="highlight-text">Prop Bet: </span>Allows the bar
            owner to make up whatever bet he wants (ex. How many points will
            Julius Randle have tonight? Will Patrick Mahomes rush for a
            touchdown?) This makes for a good promotion when there is a big game
            on and you want to stand out from everyone else.
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            All prizes are strictly the owners choice! The easier the bet the
            smaller the prize. Looking to challenge your customers? Make the bet
            more difficult and offer a bigger reward to truly put their sports
            knowledge to the test. Below are some examples of bets that have
            worked in preliminary trials.
            <ul>
              &bull; Who will score the <strong>first</strong> touchdown?
            </ul>
            <ul>
              &bull; Who will hit the <strong>first</strong> homerun tonight?
              (Bet is a loss if no one hits a homerun)
            </ul>
            <ul>&bull; What will the final score be?</ul>
          </p>
        </div>
        <div className="aboutUs__elem">
          <p>
            BarBets is available now to customers on the App store and Google
            Play store. Don&#39;t miss out on the most fun way to market and
            promote your bar. Be one of the first 75 bars to sign up on
            barbets.net and receive free BarBet coasters!
          </p>
        </div>
        <Separator />
      </div>
    </div>
  );
}

export default AboutUs;
